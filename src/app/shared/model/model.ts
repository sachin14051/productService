import { ProductStatus } from "../const/const";

export interface Iproduct {
    pname : string,
    pdesc :string,
    pstatus :ProductStatus,
    id:string
}