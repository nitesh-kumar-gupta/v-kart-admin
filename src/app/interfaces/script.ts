export interface Script {
  name: string;
  src: string;
}
export const ScriptStore: Script[] = [
  { name: 'dataTables', src: 'https://cdn.datatables.net/1.10.18/js/jquery.dataTables.min.js' },
  { name: 'bootstrapDataTables', src: 'https://cdn.datatables.net/1.10.18/js/dataTables.bootstrap4.min.js'},
  { name: 'bootstrapMultiselect', src: '../../assets/js/BsMultiSelect.min.js'},
  { name: 'popper', src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'}
];
