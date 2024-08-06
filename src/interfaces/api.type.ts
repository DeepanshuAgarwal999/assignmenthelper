declare interface APIResponse<T> {
  message: string;
  data: T;
  creation_time: string;
}
declare interface FileData {
  file_name: string;
  resource: any;
}