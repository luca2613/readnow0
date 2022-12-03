import { CategoriaResponse } from "./Categoria";
import { AutorResponse } from "./Autor";

export interface Livro {
    cd_autor: any;
	cd_categoria: number;
	nm_livro: string;
	ds_livro: string;
	dt_lancamento: string;
	cd_img_livro: string;
}


export interface LivroResponse {
	cd_livro: number;
    cd_categoria: number;
	nm_categoria: string;
	cd_autor: number;
	nm_autor: string;
	autor: AutorResponse[];
	nm_livro: string;
	ds_livro: string;
	dt_lancamento: string;
	vl_livro: number;
	cd_img_livro: string;
}
