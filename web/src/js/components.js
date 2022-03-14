export const login=`
<form class="wrapper login onTop">
    <div class="contentLogin">
        <header>
            <h1>Realizar Login</h1>
            <img/>
        </header>
        
        <main>
            <input id="emailLogin" placeholder="Digite seu email..." type="text" name="login"/>
            <input id="passwordLogin" placeholder="Digite sua senha..." type="password" name="password"/>
        </main>
        
        <footer>
            <p>Não possui conta? Clique <a class="redirectToRegister">aqui</a></p>
            <button id="btnLogin" type="reset" class="submit" >Entrar</button>
        </footer>
    </div>
</form>
`


export const register =`
<form class="wrapper register">
    <div class="contentRegister">
        <header>
            <h1>Criar Conta</h1>
            <img/>
        </header>
        
        <main>
            <input id="emailRegister" placeholder="Digite seu email..." type="text" name="login"/>
            <input id="passwordRegister" placeholder="Digite sua senha..." type="password" name="password"/>
        </main>
        
        <footer>
            <p>Possui uma conta? Clique <a class="redirectToLogin">aqui</a></p>
            <button id="btnRegister" type="reset" class="submit">Registrar</button>
        </footer>
    </div>
</form>
`

export const welcome = `
    <div class="welcome">
        
    </div>

`