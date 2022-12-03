export interface Autor {
	email: string;
	senha: string;
	nm_autor: string;
	ds_autor: string;
	cd_img_autor: string;
}

export interface AutorResponse {
	cd_autor: number;
	nm_autor: string;
	ds_autor: string;
}
