export default function DialogInstance(){
    if( typeof window.DialogInstance_ !== "undefined")
        return Promise.resolve( window.DialogInstance_ );

        window.DialogInstance_ = new Dialog();
        return Promise.resolve(window.DialogInstance_)
};
class Dialog{
    constructor(){

        this.dialog = document.querySelector(".js-dialog");
        this.cancelButton = this.dialog.querySelector(".js-cancel");
        this.okayButton = this.dialog.querySelector(".js-okay");
        this.message= this.dialog.querySelector(".js-message");
        this.title= this.dialog.querySelector(".js-title");
        this.dialogContainer = this.dialog.querySelector(".js-dialog-container");

    };
    show(title, message, hideCancel){

         this.title.innerHTML = title;
         this.message.innerHTML = message;

         this.dialog.classList.add("dialog-view--visible");
          document.body.classList.add("hide-overflow");
         this.dialogContainer.classList.add(".container--animatable");
         this.dialogContainer.style.transform = "translateY(0%)";

         if(hideCancel || typeof hideCancel == "undefined"){
           this.cancelButton.setAttribute("hidden", true);
         }else{
             this.cancelButton.removeAttribute("hidden");
         }

        return new Promise(( resolve, reject) =>{
            const removeEventListenersAndHide = ()=> {
                this.cancelButton.removeEventListener('click', onCancel);
                this.okayButton.removeEventListener('click', onOkay);
                 document.body.classList.remove("hide-overflow");
                this.dialogContainer.classList.add(".container--animatable");
                this.dialogContainer.style.transform = "translateY(30%)";

                const TransitionEnd = () =>{

                    this.dialog.classList.remove("dialog-view--visible");
                    this.dialog.removeEventListener('transitionend', TransitionEnd);
                }

                requestAnimationFrame( () => {
                    this.dialog.addEventListener('transitionend', TransitionEnd);
                });
            };
            const onOkay = ()=>{
              removeEventListenersAndHide();
              resolve();
            };
            const onCancel = ()=>{
                 removeEventListenersAndHide();
                 reject();
            };

           this.okayButton.addEventListener("click", onOkay);
           this.cancelButton.addEventListener("click", onCancel);
        })

    }
}