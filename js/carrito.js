//////////// CARGO BASE DE DATOS CON PRODUCTOS
window.onload = function () {
    // Variables
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Lager Golden',
            precio: 220,
            descripcion: 'La variedad Golden Ale se caracteriza por su espuma blanca y persistente, cuerpo ligero y carácter de malta media.Es simple, ligera y sorprendentemente sabrosa para cualquier paladar.',
            imagen: '/images/cerveza-rubia.jpg'
        },
        {
            id: 2,
            nombre: 'Irish Red',
            precio: 250,
            descripcion: 'Estilo de cerveza que viene de Irlanda y se caracteriza por su color rojizo. Cerveza fácil de beber, con un nivel de amargor bajo y aromas dulces aportados por un buen balance de maltas caramelo.',
            imagen: '/images/cerveza-irish-red.jpg'
        },
        {
            id: 3,
            nombre: 'Cream Stout',
            precio: 260,
            descripcion: 'Es una cerveza negra de origen irlandés. En ella se descubren sabores de chocolate y nueces en el paladar, con un licoroso y placentero post-gusto. Muy corpulenta, de espuma cremosa e increíblemente fácil de tomar debido a que posee menos gas carbónico que las cervezas tradicionales.',
            imagen: '/images/cerveza-stout.jpg'
        },
        {
            id: 4,
            nombre: 'American Pale Ale',
            precio: 230,
            descripcion: 'Una cerveza americana moderna adaptada de las Ales Inglesas pálidas. Una Ale de color dorado pálido casi ligeramente ámbar, refrescante y lupulada, con suficiente malta para hacer la cerveza balanceada y bebible',
            imagen: '/images/cerveza-APA.jpg'
        },
        {
            id: 5,
            nombre: 'Scottish Red',
            precio: 230,
            descripcion: 'Es una cerveza negra de origen irlandés. En ella se descubren sabores de chocolate y nueces en el paladar, con un licoroso y placentero post-gusto. Muy corpulenta, de espuma cremosa e increíblemente fácil de tomar debido a que posee menos gas carbónico que las cervezas tradicionales.',
            imagen: '/images/cerveza-roja.jpg'
        },
        {
            id: 6,
            nombre: 'Indian Pale Ale',
            precio: 230,
            descripcion: 'Cerveza de color cobrizo con alto contenido de lúpulos y malta, lo que permite que sea una cerveza intensa, amarga y es que generalmente se trata de una birra con mucho cuerpo y matices muy afrutados, seguro la conocés porque es una de las cervezas más trendy del momento.',
            imagen: '/images/cerveza-IPA2.jpg'
        },
        {
            id: 7,
            nombre: 'Britain Porter',
            precio: 230,
            descripcion: 'Su origen en Londres del siglo XVIII hace que posea un aroma malteado y el amargor del lúpulo, este tipo de cerveza es generalmente fuerte dado que se trata de una cerveza negra con sabores malteados tostados, el sabor característico de las cervezas Porter invade toda la boca con esencia tostada y achocolatada.. ',
            imagen: '/images/cerveza-porter.jpg'
        }

    ];

    let carrito = [];
    let total = 0;
    const DOMitems = document.querySelector('#product__cart');
    const DOMcarrito = document.querySelector('.cart__items');
    const DOMtotal = document.querySelector('.cart-total-price');
    const DOMbotonVaciar = document.querySelector('.vaciar-carrito');
    const miLocalStorage = window.localStorage;

    // Funciones


    //Ubico el boton TOP
    mybutton = document.getElementById("btnTop");

    // Agrego la funcion al click del boton
    $(`#btnTop`).click(topFunction)
    { };

    // Cuando el usuario clickea el boton, scrollea hacia arriba del documento
    function topFunction() {
        document.body.scrollTop = 0; // Para Safari
        document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE and Opera
    }

    //////////// EFECTO DE LA BARRA DE NAVEGACION
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.padding = "10px 10px";
            document.getElementById("logo").style.fontSize = "30px";

            mybutton.style.display = "block";

        } else {
            document.getElementById("navbar").style.padding = "50px 10px";
            document.getElementById("logo").style.fontSize = "30px";

            mybutton.style.display = "none";
        }
    }

    // FUNCION DE CREAR PRODUCTOS CON JQUERY
    $(document).ready(function () {
        $(".btn btn-succes").click(function (e) {
            let hijos = $(e.target).parent().children();
            alert(hijos[0].value);
        });
    });

    for (const producto of baseDeDatos) {
        $(DOMitems).append(`<div class="card col-sm-4">
                                <div class="card-body">
                                    <img class="img-fluid" src="${producto.imagen}">
                                    <h4 class="card-title">${producto.nombre}</h4>
                                    <p class="card-price">$${producto.precio}</p>
                                    <p class="card-text">${producto.descripcion}</p>
                                    <button class="btn btn-success" marcador="${producto.id}" onclick=snackbarFunction()">Añadir al carrito</button>
                                    <div id="snackbar">Producto agregado correctamente</div>
                                </div>
                            </div>`);


    };

    // CARGO PRODUCTO EN CARRITO CON CLICK
    $(`.btn`).click(agregarProductoAlCarrito)
    { };


    // funcion del snackbar que muestra el producto agregado
    function snackbarFunction() {
        var x = document.getElementById("snackbar");

        x.className = "show";

        // Despues de 3 segundos, saco el show del classname del DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 2500);
    }



    // Cuando el usuario scrollea 20px desde arriba, se muestra el boton
    /*
    window.onscroll = function () { scrollTopFunction() };

    function scrollTopFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }*/


    /**
    * Genero todos los productos a partir de la base de datos.
    */

    /*
    function generarProductos() {
        baseDeDatos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h4');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-price');
            miNodoPrecio.textContent = '$' + info.precio;
            // Descripcion
            const miNodoDescripcion = document.createElement('p');
            miNodoDescripcion.classList.add('card-text');
            miNodoDescripcion.textContent = info.descripcion;
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-success');
            miNodoBoton.textContent = 'Añadir al carrito';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', agregarProductoAlCarrito);
            // Inserto todos los nodos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoDescripcion);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }
    */

    /**  Evento para agregar un producto al carrito de la compra  **/
    function agregarProductoAlCarrito(evento) {

        // Agrego el Nodo al carrito
        carrito.push(evento.target.getAttribute('marcador'))

        // Calculo el total
        calcularTotal();

        // Actualizo el carrito 
        renderizarCarrito();

        // Actualizo el LocalStorage
        guardarCarritoEnLocalStorage();

        // Muestro mensaje del producto
        snackbarFunction();

        // Muestro mensaje del producto
        //alert("Producto agregado correctamente");
    }




    /** Dibuja todos los productos guardados en el carrito  **/
    function renderizarCarrito() {
        // Vacio todo el html
        DOMcarrito.textContent = '';

        // Saco los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];

        // Genero los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {

            // Se obtiene el item que necesitamos de la variable base de datos
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                // Si coincidide el ID dejo uno solo
                return itemBaseDatos.id === parseInt(item);
            });

            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // Si coincide el ID, incremento el contador, en caso contrario no mantengo
                return itemId === item ? total += 1 : total;
            }, 0);

            // Creo el nodo del item del carrito
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            //miNodo.textContent = `${miItem[0].nombre} - $${miItem[0].precio} x ${numeroUnidadesItem}`;
            miNodo.textContent = `${miItem[0].nombre} - $${miItem[0].precio}`;

            // Input de Cantidad
            const miInput = document.createElement('input');
            miInput.classList.add('cart-quantity-input', 'cart-quantity');
            //miInput.textContent = '1';
            miInput.style.marginLeft = '1rem';
            miInput.type = 'number';
            miInput.value = numeroUnidadesItem;
            miInput.dataset.item = item;
            miInput.addEventListener('change', quantityChanged);

            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'ms-5');
            miBoton.textContent = 'Borrar';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);

            // Inserto los nodos
            miNodo.appendChild(miInput);
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
    }

    /**  Evento para borrar un elemento del carrito  **/
    function borrarItemCarrito(evento) {

        // Obtengo el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;

        // Borro todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });

        // Vuevlo a renderizar
        renderizarCarrito();

        // Calculo de nuevo el precio
        calcularTotal();

        // Actualizo el LocalStorage
        guardarCarritoEnLocalStorage();

    }

    /**  Calcula el precio total teniendo en cuenta los productos repetidos  **/
    function calcularTotal() {

        // Se limpia el precio anterior
        total = 0;

        // Se recorre el array del carrito
        carrito.forEach((item) => {

            // De cada elemento se obtiene su precio
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });

            total = total + miItem[0].precio;
        });

        // Se muesta el precio en el HTML
        DOMtotal.textContent = total.toFixed(2);
    }

    /**  Se vacia el carrito y vuelve a dibujarlo  **/
    function vaciarCarrito() {

        // Se limpian los productos guardados
        carrito = [];

        // Actualiza los cambios
        renderizarCarrito();
        calcularTotal();

        // Borra LocalStorage
        localStorage.clear();

    }


    // Muestro mensaje de la compra
    function purchaseClicked() {
        //alert('Gracias por tu compra!')

        // Vacio el carrito
        vaciarCarrito();

        // Actualiza los cambios
        calcularTotal();
    }



    // Funcion de guardado del carrito en LocalStorage
    function guardarCarritoEnLocalStorage() {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage() {
        // ¿Existe un carrito previo guardado en LocalStorage?
        if (miLocalStorage.getItem('carrito') !== null) {

            // Carga la información
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }

    /* Update quantity */
    function updateQuantity(quantityInput) {
        /* Calculate line price */
        var productRow = $(quantityInput).parent().parent();
        var price = parseFloat(productRow.children('.card-price').text());
        var quantity = $(quantityInput).val();
        var linePrice = price * quantity;


        calcularTotal();

    }
    /* Assign actions */
    $('.cart-quantity-input').change(function () {
        updateQuantity(this);
    });




    // Funcion del input de Cantidad
    function quantityChanged(event) {
        var input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1
        }

        // Calculo el total
        calcularTotal();
    }


    //////////////////// FUNCION READY
    if (document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', ready)
    } else {
        ready()
    }

    function ready() {
        var cantidadInputs = document.getElementsByClassName('cart-quantity-input')
        for (var i = 0; i < cantidadInputs.length; i++) {
            var input = cantidadInputs[i]
            input.addEventListener('change', quantityChanged)
        }

        document.getElementsByClassName('btn-cart__save')[0].addEventListener('click', purchaseClicked)
    }


    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Funciones al Inicio
    cargarCarritoDeLocalStorage();
    generarProductos();
    calcularTotal();
    renderizarCarrito();
}