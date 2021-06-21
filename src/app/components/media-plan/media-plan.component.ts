import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

type Channel = {
  name: string;
  budget?: number;
  keepConsistent?: boolean;
  exclude?: boolean;
};

@Component({
  selector: 'app-media-plan',
  templateUrl: './media-plan.component.html',
  styleUrls: ['./media-plan.component.scss'],
})
export class MediaPlanComponent implements OnInit {
  mediaForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  channels: Channel[] = [
    {
      name: 'SEA',
      budget: 0,
      keepConsistent: false,
      exclude: false,
    },
    {
      name: 'Display',
      budget: 0,
      keepConsistent: false,
      exclude: false,
    },
    {
      name: 'Social',
      budget: 0,
      keepConsistent: false,
      exclude: false,
    },
  ];

  total: number;

  ngOnInit(): void {
    this.mediaForm = this.fb.group({
      name: [''],
      startDate: [Date.now()],
      endDate: [Date.now()],
      channels: this.createChannelsArray(),
    });
    this.mediaForm.valueChanges.subscribe((values) => {
      (this.mediaForm.get('channels') as FormArray).controls.forEach((item) => {
        const budget = item.get('budget');
        if (budget.value && budget.value.length) {
          let val: string = budget.value.slice();
          if (budget.value[0] === '$') {
            val = val.slice(1);
          }
          this.total = isNaN(+val) ? 0 : +val;
          const decimalPoint = val.indexOf('.');
          if (decimalPoint !== -1) {
            const numVal2 = val.slice(0, decimalPoint);
            const numval3 = val.slice(decimalPoint, decimalPoint + 3);
            budget.setValue('$'.concat(numVal2).concat(numval3), {
              onlySelf: true,
              emitValue: false,
            });
          } else {
            budget.setValue('$'.concat(val), {
              onlySelf: true,
              emitValue: false,
            });
          }
        }
      });

      this.total = 0;
      (this.mediaForm.get('channels') as FormArray).controls.forEach((item) => {
        const budget = item.get('budget');
        if (budget.value && budget.value.length) {
          let val: string = budget.value.slice();
          if (budget.value[0] === '$') {
            val = val.slice(1);
          }
          this.total = this.total + (isNaN(+val) ? 0 : +val);
        }
      });
    });
  }

  createChannelsArray() {
    return this.fb.array(
      this.channels.map((channel) => {
        return this.fb.group({
          name: [],
          budget: [''],
          keepConsistent: [],
          exclude: [],
        });
      })
    );
  }

  getBudget(index: number) {
    return (this.mediaForm.get('channels') as FormArray).controls[index].get(
      'budget'
    );
  }

  getExclude(index: number) {
    return (this.mediaForm.get('channels') as FormArray).controls[index].get(
      'exclude'
    );
  }
}
