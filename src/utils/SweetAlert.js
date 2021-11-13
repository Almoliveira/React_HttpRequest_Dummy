import swal from 'sweetalert';


class SweetAlertController{

    static alertPostSuccess(){
        swal({
            title: "Dados enviados com Sucesso!",
            text: "Os dados foram persistidos com sucesso ao servidor!",
            icon: "success"
        })
    }

    static alertMissingFormParam(movie){
        for(const [key, value] of Object.entries(movie)){
            if(value === ''){
                swal({
                    title: 'Não foi possivel enviar os dados!',
                    text: `O Campo ${String(key)} está vazio`,
                    icon: "warning"
                })
                return false
            }
        }
        return true;
    }

}


export default SweetAlertController;