const btnRegisters = document.querySelectorAll('.register-js')
        const btnLogins = document.querySelectorAll('.login-js')
        const modalRegister = document.querySelector('.modal-Register-js')
        const modalLogin = document.querySelector('.modal-Login-js')
        const modalBodyRegister = document.querySelector('.modal__body-Register-js')
        const modalBodyLogin = document.querySelector('.modal__body-Login-js')

        const btnBacks = document.querySelectorAll('.btn--normal-js')
        
        function showFormRegister(){
            modalRegister.classList.add('open')
        }
        function HideFormRegister(){
            modalRegister.classList.remove('open')
        }
        function showFormLogin(){
            modalLogin.classList.add('open')
        }
        function HideFormLogin(){
            modalLogin.classList.remove('open')
        }
        // Vong Lap Open and Close Form Dang Nhap Dang Ky
        for(const btnRegister of btnRegisters){
            
            btnRegister.addEventListener('click', HideFormLogin)
            for(const btnRegister of btnRegisters){
            
                btnRegister.addEventListener('click', showFormRegister)
            
        }
            
        }
        for(const btnLogin of btnLogins){

            btnLogin.addEventListener('click', HideFormRegister)
            
            for(const btnLogin of btnLogins){
            
            btnLogin.addEventListener('click', showFormLogin)
            
        }
        }
        
        modalRegister.addEventListener('click', HideFormRegister)
        modalLogin.addEventListener('click', HideFormLogin)
        for(const btnBack of btnBacks){

            btnBack.addEventListener('click', HideFormLogin)
        }
        for(const btnBack of btnBacks){

            btnBack.addEventListener('click', HideFormRegister)
        }
        
        // Stop click outside
        modalBodyRegister.addEventListener('click', function(event){
            event.stopPropagation()//Dừng hành vi nổi bọt
        })
        modalBodyLogin.addEventListener('click', function(event){
            event.stopPropagation()//Dừng hành vi nổi bọt
        })
        // Search button
        const btnShopIn = document.querySelector('.shopIn-js')
        const btnShopOut = document.querySelector('.shopOut-js')
        const tagIn = document.querySelector('.header__seacrch-option-item-icon-In')
        const tagOut = document.querySelector('.header__seacrch-option-item-icon-Out')
        function ActiveCheckIn(){
            tagIn.classList.add('header__seacrch-option-item-icon-active')
        }
        function ActiveCheckOut(){
            tagOut.classList.add('header__seacrch-option-item-icon-active')
        }
        function DisableCheck(){
            tagIn.classList.remove('header__seacrch-option-item-icon-active')
        }
        function DisableCheck(){
            tagOut.classList.remove('header__seacrch-option-item-icon-active')
        }
        
        btnShopIn.addEventListener('click',ActiveCheckIn)
           
        btnShopOut.addEventListener('click', ActiveCheckOut)