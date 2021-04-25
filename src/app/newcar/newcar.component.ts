import { environment } from 'src/environments/environment';
import { NewcarService } from './newcar.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
  FormArray,
} from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-newcar',
  templateUrl: './newcar.component.html',
  styleUrls: ['./newcar.component.scss'],
})
export class NewcarComponent implements OnInit, OnDestroy {
  progress: number | undefined;
  message: string | undefined;
  defaultValueObj = {
    saleType: '',
    fuelType: '',
    transmission: '',
    condition: '',
  };
  files: File[] = [];
  newCarForm: FormGroup;
  editor: Editor;
  saleType: any = ['Used', 'Sale'];
  fuelType: any = ['Petrol', 'Diesel', 'Gasoline'];
  transmission: any = ['Manual', 'Transmission'];
  condition: any = ['Used', 'New'];
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  items: any = [
    {
      name: 'Cruise Control',
      value: 'Cruise Control',
    },
    {
      name: 'Audio Interface',
      value: 'Audio Interface',
    },
    {
      name: 'Air Bags',
      value: 'Air Bags',
    },
    {
      name: 'Air Conditioning',
      value: 'Air Conditioning',
    },
    {
      name: 'Seat Heating',
      value: 'Seat Heating',
    },
    {
      name: 'Alarm System',
      value: 'Alarm System',
    },
    {
      name: 'Park Assist',
      value: 'Park Assist',
    },
    {
      name: 'Power Steering',
      value: 'Power Steering',
    },
    {
      name: 'Direct Fuel Injection',
      value: 'Direct Fuel Injection',
    },
    {
      name: 'Auto Start/stop',
      value: 'Auto Start/stop',
    },
    {
      name: 'Wind Detector',
      value: 'Wind Detector',
    },
    {
      name: 'Bluetooth Handset',
      value: 'Bluetooth Handset',
    },
  ];

  constructor(private newcarService: NewcarService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.editor = new Editor();
    this.createCarForm();
  }

  fuelTypeEvent(e: any): void {
    this.newCarForm.controls.fuelType.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  saleTypeEvent(e: any): void {
    this.newCarForm.controls.saleType.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  transmissionEvent(e: any): void {
    this.newCarForm.controls.transmission.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  conditionEvent(e: any): void {
    this.newCarForm.controls.condition.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  createCarForm(): void {
    this.newCarForm = this.fb.group({
      carName: [null, Validators.required],
      price: [null, Validators.required],
      location: [null, Validators.required],
      saleType: [null, Validators.required],
      featured: [null, Validators.required],
      fuelType: [null, Validators.required],
      miles: [null, Validators.required],
      transmission: [null, Validators.required],
      bodyStyle: [null, Validators.required],
      color: [null, Validators.required],
      yearMake: [null, Validators.required],
      model: [null, Validators.required],
      condition: [null, Validators.required],
      engine: [null, Validators.required],
      interiorColor: [null, Validators.required],
      doors: [null, Validators.required],
      passengers: [null, Validators.required],
      vinNo: [null, Validators.required],
      mileage: [null, Validators.required],
      carDescription: [null, Validators.required],
      features: this.featuresAdd(this.items),
      carPhoto: [null],
      carPhoto1: [null],
      carPhoto2: [null],
      carPhoto3: [null],
    });
  }
  featuresAdd(items: any): any {
    const arr = items.map((item: string) => {
      return new FormControl(false);
    });
    return new FormArray(arr);
  }

  onSubmit(): void {
    const carObject: any = {
      carName: '',
      price: '',
      location: '',
      saleType: '',
      featured: '',
      fuelType: '',
      miles: '',
      transmission: '',
      bodyStyle: '',
      color: '',
      yearMake: '',
      model: '',
      condition: '',
      engine: '',
      interiorColor: '',
      doors: '',
      passengers: '',
      vinNo: '',
      mileage: '',
      carDescription: '',
      features: [],
      carPhotos: [],
    };

    carObject.carName = this.newCarForm.get('carName')?.value;
    carObject.price = this.newCarForm.get('price')?.value;
    carObject.location = this.newCarForm.get('location')?.value;
    carObject.saleType = this.newCarForm.get('saleType')?.value;
    carObject.featured = this.newCarForm.get('featured')?.value;
    carObject.fuelType = this.newCarForm.get('fuelType')?.value;
    carObject.miles = this.newCarForm.get('miles')?.value;
    carObject.transmission = this.newCarForm.get('transmission')?.value;
    carObject.bodyStyle = this.newCarForm.get('bodyStyle')?.value;
    carObject.color = this.newCarForm.get('color')?.value;
    carObject.yearMake = this.newCarForm.get('yearMake')?.value;
    carObject.model = this.newCarForm.get('model')?.value;
    carObject.condition = this.newCarForm.get('condition')?.value;
    carObject.engine = this.newCarForm.get('engine')?.value;
    carObject.interiorColor = this.newCarForm.get('interiorColor')?.value;
    carObject.doors = this.newCarForm.get('doors')?.value;
    carObject.passengers = this.newCarForm.get('passengers')?.value;
    carObject.vinNo = this.newCarForm.get('vinNo')?.value;
    carObject.mileage = this.newCarForm.get('mileage')?.value;
    carObject.carDescription = this.newCarForm.get('carDescription')?.value;
    this.newCarForm
      .get('features')
      ?.value.map((arr: boolean, index: number) => {
        if (arr) {
          carObject.features.push(this.items[index].value);
        }
      });

    carObject.carPhotos = [this.newCarForm.get('carPhoto')?.value, this.newCarForm.get('carPhoto1')?.value
, this.newCarForm.get('carPhoto2')?.value, this.newCarForm.get('carPhoto3')?.value];
    console.log(carObject);
  }

  setControl(fileToUpload: string, id: string): void {
    this.newCarForm
      .get('carPhoto' + id)
      ?.setValue(environment.carPath + fileToUpload);
  }

  uploadFile = (files: File[], id: string) => {
    if (files.length === 0) {
      return;
    }
    const fileToUpload = files[0] as File;
    console.log(
      environment.carPath + fileToUpload.lastModified + '_' + fileToUpload.name
    );

    this.setControl(fileToUpload.name, id);
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.newcarService
      .UploadService(formData)
      // tslint:disable-next-line: deprecation
      .subscribe((event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round((100 * event.loaded) / event.total);
        } else if (event.type === HttpEventType.Response) {
          this.message = 'upload success.';
        }
      });
  }
  
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
