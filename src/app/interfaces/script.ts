export interface Script {
  name: string;
  src: string;
}
export const ScriptStore: Script[] = [
  { name: 'dataTables', src: 'https://cdn.datatables.net/1.10.18/js/jquery.dataTables.min.js' },
  { name: 'bootstrapDataTables', src: 'https://cdn.datatables.net/1.10.18/js/dataTables.bootstrap4.min.js'}
];
