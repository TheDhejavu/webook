export default function DialogInstance(){
    if( typeof window.DialogInstance_ !== "undefined")
        return Promise.resolve( window.DialogInstance_ );

        window.DialogInstance_ = new  Dialog();
        return Promise.resolve(window.DialogInstance_)
};

class Dialog{

    closeDialogComponent(){
        this.dialog = document.querySelector(".js-dialog");
        this.cancelButton = this.dialog.querySelector(".js-cancel");
        this.dialogContainer = this.dialog.querySelector(".js-dialog-container");

        this.dialogContainer.classList.remove(".container--animatable");
        this.dialogContainer.style.transform = "translateY(5%)";

        const TransitionEnd = () =>{

            this.dialog.classList.remove("dialog-view--visible");
            this.dialog.removeEventListener('transitionend', TransitionEnd);
        }

        requestAnimationFrame( () => {
            this.dialog.addEventListener('transitionend', TransitionEnd);
        });
    }

    openDialogComponent(){
        this.dialog = document.querySelector(".js-dialog");
        this.cancelButton = this.dialog.querySelector(".js-cancel");
        this.dialogContainer = this.dialog.querySelector(".js-dialog-container");

        this.dialog.classList.add("dialog-view--visible");
        this.dialogContainer.classList.add(".container--animatable");
        this.dialogContainer.style.transform = "translateY(0%)";
    }

}
