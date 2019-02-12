export interface Style {
  name: string;
  src: string;
}
export const StyleStore: Style[] = [
  { name: 'dataTables', src: 'https://cdn.datatables.net/1.10.18/css/jquery.dataTables.min.css' },
  { name: 'bootstrapDataTables', src: 'https://cdn.datatables.net/1.10.18/css/dataTables.bootstrap4.min.css'},
  { name: 'bootstrapMultiselect', src: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-multiselect/0.9.15/css/bootstrap-multiselect.css'}
];
