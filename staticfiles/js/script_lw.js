 function showTab(tabId, event) {
      const contents = document.querySelectorAll('.tab-content');
      const buttons = document.querySelectorAll('.tab-button');

      contents.forEach(content => content.classList.remove('active'));
      buttons.forEach(button => button.classList.remove('active'));

      document.getElementById(tabId).classList.add('active');
      event.target.classList.add('active');
    }


/* ----------------  Animación de Sarita--------------------*/
const checkboxes = document.querySelectorAll('#servicios-lista input');
    const totalSpan = document.getElementById('total');

    checkboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        let total = 0;
        checkboxes.forEach(c => {
          if (c.checked) total += parseInt(c.value);
        });
        totalSpan.textContent = `$${total.toLocaleString('es-CO')}`;
      });
    });

    function enviarWhatsApp() {
      let servicios = [];
      let total = 0;
      checkboxes.forEach(c => {
        if (c.checked) {
          servicios.push(c.parentElement.textContent.trim());
          total += parseInt(c.value);
        }
      });
      const mensaje = `Hola, estoy interesado en los siguientes servicios:\n\n${servicios.join('\n')}\n\nTotal estimado: $${total.toLocaleString('es-CO')}`;
      const url = `https://wa.me/573053122793?text=${encodeURIComponent(mensaje)}`;
      window.open(url, '_blank');
      }

//---------------------Ventana Modal---------------------------------------------
function startIntro() {
            const modal = document.getElementById('myModal');
            const mainContent = document.getElementById('mainContent');
            const audio = document.getElementById('modalAudio');

            if (!modal || !mainContent || !audio) {
                console.error('Error: No se encontraron los elementos DOM con los IDs esperados.');
                return;
            }

            modal.style.display = 'flex';
            mainContent.style.display = 'none';
            audio.play().catch(error => {
                console.error('Error al reproducir audio:', error);
            });

            setTimeout(closeModal, 10000);
        }

        function closeModal() {
            const modal = document.getElementById('myModal');
            const mainContent = document.getElementById('mainContent');
            const audio = document.getElementById('modalAudio');

            if (modal && mainContent && audio) {
                modal.style.display = 'none';
                mainContent.style.display = 'block';
                audio.pause();
                audio.currentTime = 0;
            } else {
                console.error('Error al cerrar la modal: Elementos no encontrados.');
            }
        }

        window.onclick = function(event) {
            const modal = document.getElementById('myModal');
            if (event.target === modal) {
                closeModal();
            }
        }
//----------------------------Formulario de Contácto--------------------------
document.getElementById("formContacto").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;

  console.log("Formulario enviado:");
  console.log({ nombre, apellido, telefono, correo, mensaje });

  alert("¡Gracias por contactarnos, " + nombre + "! Tu mensaje ha sido enviado.");
  this.reset();
});