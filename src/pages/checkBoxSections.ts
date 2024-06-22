export const checkBoxSections: CheckBoxSection[] = [
  {
    header: 'General Tax Prep Info (Check if yes)',
    checkBoxes: [
      {
        label: 'Check this box if you will get me ALL of your tax\n' +
          '    documents before March 18, 2024, OR if you come\n' +
          '    to work with me after April 15, 2024 AND you\n' +
          '    already had an extension filed elsewhere',
        key: '',
        value: '',
        checked: false
      },
      {
        label: 'Did I prepare your taxes in 2022?',
        key: '',
        value: '',
        checked: false
      }
    ]
  },
  {
    header: 'Filing Status (select only one)',
    checkBoxes: [
      {
        label: 'Single',
        key: '',
        value: '',
        checked: false
      },
      {
        label: 'Head of Household',
        key: '',
        value: '',
        checked: false
      },
      {
        label: ' Qualifying Widow(er)',
        key: '',
        value: '',
        checked: false
      },
      {
        label: 'Married Filing Separately',
        key: '',
        value: '',
        checked: false
      },
      {
        label: 'Married Filing Jointly',
        key: '',
        value: '',
        checked: false
      }
    ]
  },
  {
    header: 'Sources of Income',
    checkBoxes: [
      {
        label: 'W-2 Wages',
        key: '',
        value: '',
        checked: false
      },
      {
        label: 'Interest/Dividend Income',
        key: '',
        value: '',
        checked: false
      },
      {
        label: 'IRA/Pension Distributions',
        key: '',
        value: '',
        checked: false
      },
      {
        label: 'Social Security Benefits',
        key: '',
        value: '',
        checked: false
      },
      {
        label: 'Self Employment Income',
        key: '',
        value: '',
        checked: false
      },
      {
        label: 'Stock Sales',
        key: '',
        value: '',
        checked: false
      },
      {
        label: 'Cryptocurrency Sales',
        key: '',
        value: '',
        checked: false
      },
      {
        label: 'Primary Home Sale',
        key: '',
        value: '',
        checked: false
      },
      {
        label: 'Investment Property Sale',
        key: '',
        value: '',
        checked: false
      },
      {
        label: 'Real Estate Rental Income',
        key: '',
        value: '',
        checked: false
      },
      {
        label: 'Are you an owner in any S Corps?',
        key: '',
        value: '',
        checked: false
      },
      {
        label: 'Are you an owner in any Partnerships?',
        key: '',
        value: '',
        checked: false,
        input: 'How many partnerships are you an owner in?'
      },
      {
        label: 'Publicly Traded Partnership K-1s',
        key: '',
        value: '',
        checked: false
      },
      {
        label: 'Gambling Income',
        key: '',
        value: '',
        checked: false
      },
      {
        label: 'Other Income',
        key: '',
        value: '',
        checked: false
      }
    ]
  }
];


// TODO: Maybe a different file?
export interface CheckBoxSection {
  header: string;
  checkBoxes: CheckBox[];
}

export interface CheckBox {
  label: string;
  key: string;
  value: string;
  checked: boolean;
  input?: string;
}
