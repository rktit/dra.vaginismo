class Utils {
    static mobile(){
        return window.innerWidth < 768 ? true : false;
    }

    static reload(){
        console.log("RELOAD");
        window.location.reload(true);
    }

    static pageThanks(){
        window.location.href = "https://dravaginismo.com.br/encontromulhereslivres/obrigado";
    }
}

export default Utils;