class Utils {
    static mobile(){
        return window.innerWidth < 768 ? true : false;
    }

    static reload(){
        console.log("RELOAD");
        window.location.reload(true);
    }
}

export default Utils;