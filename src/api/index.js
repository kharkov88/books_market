const mock_data = {products:[
    {
        "id":"0",
        "year":"2014",
        "price":"35$",
        "author":"Майкл Миковски, Джош Пауэлл",
        "name":"Single Page Web Applications",
        "image_url":"https://books.google.com.ua/books/content?id=XVUHCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70Uf4iyWU3S97Zrtl9ve8uC0JchFaKVqAe82PPjpo_WshNfaCTDLb-M7tLecpWjfzgRtMdHaFpWiHsGzo_VOXN7ks2HyFDq5RwQ4neaOfONVZ-bkF0DTlDNEKSb9Zad7f6c5KEv",
        "except":"Если ваш сайт представляет собой набор дергающихся страниц, связанных ссылками, то вы отстали от жизни. Следующей ступенью вашей карьеры должны стать одностраничные приложения (SPA). В таком приложении отрисовка пользовательского интерфейса и бизнес-логика перенесены в браузер, а взаимодействие с сервером сводится к синхронизации данных. Пользователь работает с таким сайтом, как с персональным приложением на рабочем столе, что гораздо удобнее и приятнее. Однако разрабатывать, сопровождать и ",
        "content":"Если ваш сайт представляет собой набор дергающихся страниц, связанных ссылками, то вы отстали от жизни. Следующей ступенью вашей карьеры должны стать одностраничные приложения (SPA). В таком приложении отрисовка пользовательского интерфейса и бизнес-логика перенесены в браузер, а взаимодействие с сервером сводится к синхронизации данных. Пользователь работает с таким сайтом, как с персональным приложением на рабочем столе, что гораздо удобнее и приятнее. Однако разрабатывать, сопровождать и тестировать SPA нелегко. В этой книге показано как организуется командная разработка передовых SPA – проектирование, тестирование, сопровождение и развитие – с применением JavaScript на всех уровнях и без привязки к какому-то конкретному каркасу.Попутно вы отточите навыки работы с HTML5, CSS3 и JavaScript и узнаете об использовании JavaScript не только в браузере, но также на сервере и в базе данных."
    },
    {
        "id":"1",
        "year":"2016",
        "price":"37$",
        "author":"John Resig, Bear Bibeault, Josip Maras",
        "name":"Secrets of the JavaScript Ninja",
        "image_url":"https://books.google.com.ua/books/content?id=vxbUjwEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73UNK9XOCMajJFqD6y9b-vOVyMxRUWsOw26Bcp-6u67athIrNA3GxxD2TAOVKjnNQ8GF2FFmaYs0CfKOakpIoazqdut52VHfvGJIb_u1i3n6czfN2cu7eAdLOiHfeZcZuzeij20",
        "except":"More than ever, the web is a universal platform for all types of applications, and JavaScript is the language of the web. If you're serious about web development, it's not enough to be a decent JavaScript coder. You need to be ninja-stealthy, efficient, and ready for anything. This book ",
        "content":""
    }
]}

export let Api = (function(){
    const url="/get-data"
    const url_add="/add"
    const url_change="/change"
    const url_delete="/delete"

    let list = ()=>
    mock_data
    /*fetch(url,{})
        .then(response=>{
        return response.json()
        .then(data=>data)
        })
        .catch(e=>console.log(e))
    */
    let remove = (id)=>
    fetch(url_delete,{
        method:"post",
        headers:{"Content-type": 'application/json; charset=utf-8'},
        body:JSON.stringify({id:id})     
    })
    .then(response=>{
      return response.json()
      .then(data=>data)
    })
    .catch(e=>console.log(e))
    
    let add = (obj)=>
    fetch(url_add,{
        method:"POST",
        headers:{"Content-type": 'application/json; charset=utf-8'},
        body:JSON.stringify(obj)
    })
    .then(response=>{
      return response.json()
      .then(data=>data)
    })
    .catch(e=>console.log(e))

    let change = (obj)=>
    fetch(url_change,{
        method:"POST",
        headers:{"Content-type": 'application/json; charset=utf-8'},
        body:JSON.stringify({
            item:obj
        })
    })
    .then(response=>{
      return response.json()
      .then(data=>data)
    })
    .catch(e=>console.log(e))

    return {
        list,
        add,
        remove,
        change
    }
}())



