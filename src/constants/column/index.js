export const orderListColumn = [
  // {
  //   title: '番号',
  //   dataIndex: 'index',
  //   render: (text, record, index) => {
  //     return index + 1;
  //   },
  // },
  {
    title: '日時',
    dataIndex: 'タイムゾーン',
    sorter: (a, b) => {
      a = new Date(a.日時).getTime();
      b = new Date(b.日時).getTime();
      return a - b;
    },
  },
  {
    title: '時間',
    dataIndex: '時間',
    key: '時間',
  },
  {
    title: '依頼会社',
    dataIndex: '依頼会社',
    key: '依頼会社',
  },
  {
    title: '車種',
    dataIndex: '車種',
    key: '車種',
  },
  {
    title: '出勤場所',
    dataIndex: '出勤場所',
    key: '出勤場所',
  },
  {
    title: '輸送先',
    dataIndex: '輸送先',
    key: '輸送先',
  },
  {
    title: '作業車',
    dataIndex: '作業車',
    key: '作業車',
  },
  {
    title: '出勤者',
    dataIndex: '名前',
    key: '名前',
  },
];

export const memberListColumn = [
  {
    title: '番号',
    dataIndex: 'index',
    render: (text, record, index) => {
      return index + 1;
    },
  },
  {
    title: '名前',
    dataIndex: '名前',
    key: '名前',
  },
  {
    title: 'Email',
    dataIndex: 'Email',
    key: 'Email',
  },
  {
    title: '電話番号',
    dataIndex: '電話番号',
    key: '電話番号',
  },
  {
    title: '入社日',
    dataIndex: '入社日',
    key: '入社日',
  },
];
