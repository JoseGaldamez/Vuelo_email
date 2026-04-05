const fs = require('fs');

const indexHtml = fs.readFileSync('g:/Develop/Vuelo_email/index.html', 'utf8');

const headAndHeaderMatch = indexHtml.match(/([\s\S]*?)<main>/);
const footerMatch = indexHtml.match(/(<\/main>[\s\S]*)/);

if (!headAndHeaderMatch || !footerMatch) throw new Error("Could not parse index.html");

const header = headAndHeaderMatch[1].replace('<title>Vuelo.email - Tu correo y chat en la misma frecuencia</title>', '<title>__TITLE__ - Vuelo.email</title>');
const footer = footerMatch[1];

function createPage(filename, title, content) {
    const pageHeader = header.replace('__TITLE__', title);
    const pageHtml = pageHeader + 
        `<main class="pt-32 pb-24 min-h-screen px-6 max-w-4xl mx-auto">\n` +
        `    <h1 class="font-headline font-extrabold text-4xl mb-8">${title}</h1>\n` +
        `    <div class="prose prose-slate dark:prose-invert max-w-none prose-lg text-secondary">\n` +
        content +
        `    </div>\n` +
        `</main>\n` + 
        footer;
    fs.writeFileSync(`g:/Develop/Vuelo_email/${filename}`, pageHtml);
}

const privacyContent = `
    <h2 class="text-2xl font-bold mt-8 mb-4 text-on-surface">1. Introducción</h2>
    <p class="mb-4">En Vuelo.email tomamos tu privacidad en serio. No rastreamos tu actividad ni compartimos tus datos con terceros. Todos tus correos y mensajes son procesados bajo estrictas normas de seguridad.</p>
    <h2 class="text-2xl font-bold mt-8 mb-4 text-on-surface">2. Recopilación de Datos</h2>
    <p class="mb-4">Solo recopilamos la información estrictamente necesaria para proveerte el servicio de correo y mensajería XMPP. Esto incluye la dirección de correo y los metadatos necesarios para el enrutamiento y entrega de tus comunicaciones.</p>
    <h2 class="text-2xl font-bold mt-8 mb-4 text-on-surface">3. Retención de Datos</h2>
    <p class="mb-4">Tus datos son almacenados de forma segura y en reposo mediante cifrado AES-256. Puedes solicitar su eliminación permanente y completa en cualquier momento desde los ajustes de tu panel de control.</p>
`;

const termsContent = `
    <h2 class="text-2xl font-bold mt-8 mb-4 text-on-surface">1. Aceptación de los Términos</h2>
    <p class="mb-4">Al acceder y utilizar Vuelo.email, aceptas estar sujeto a estos términos y condiciones. Si no estás de acuerdo con alguna de nuestras estipulaciones legales, por favor abstente de utilizar el servicio.</p>
    <h2 class="text-2xl font-bold mt-8 mb-4 text-on-surface">2. Uso del Servicio</h2>
    <p class="mb-4">Te comprometes a utilizar Vuelo.email exclusivamente para fines legales y bajo un contexto de buena fe. Queda terminantemente prohibido el uso de nuestro servicio corporativo para el envío de spam, distribución de malware, acoso o publicación de contenido ilegal.</p>
    <h2 class="text-2xl font-bold mt-8 mb-4 text-on-surface">3. Modificaciones al Acuerdo</h2>
    <p class="mb-4">Nos reservamos el derecho de actualizar o modificar estos términos en cualquier momento. Siempre te notificaremos por correo electrónico sobre cualquier cambio significativo con al menos 30 días de anticipación de su entrada en vigor.</p>
`;

const aboutContent = `
    <div class="mb-12">
        <h2 class="font-headline font-extrabold text-3xl mb-6 text-primary">Nuestra Misión</h2>
        <p class="mb-4 text-xl leading-relaxed">Vuelo.email nació de una frustración compartida: la desconexión total entre los sistemas de comunicación formal (el correo electrónico) y las plataformas de resolución rápida (el chat).</p>
        <p class="mb-4 text-xl leading-relaxed">Nuestra misión es resolver esa fisura unificando los flujos bajo una plataforma ágil, veloz, absolutamente respetuosa con la privacidad y diseñada cuidadosamente para el disfrute de los usuarios corporativos exigentes.</p>
    </div>
    
    <div class="mb-12">
        <h2 class="font-headline font-bold text-2xl mt-12 mb-6 text-on-surface">Compromiso con la Tecnología Abierta</h2>
        <p class="mb-4">Creemos firmemente en el poder de los estándares abiertos. Por eso nuestro backend está fundamentado en soluciones open-source de primer nivel como <span class="font-bold text-slate-800 dark:text-slate-200">Openfire</span> para nuestra infraestructura XMPP, garantizando la libre federación y permitiendo la interoperabilidad soberana con otras redes compatibles.</p>
    </div>
    
    <div class="mb-12">
        <h2 class="font-headline font-bold text-2xl mt-12 mb-6 text-on-surface">Un diseño de Santuario Cinético</h2>
        <p class="mb-4">Queríamos que la interfaz no fuera únicamente funcional, sino un lugar agradable y orgánico para trabajar. Por ello, combinamos elementos estéticos pulcros con microinteracciones y efectos físicos en lo que llamamos nuestro <span class="italic">"Kinetic Sanctuary Design"</span>.</p>
    </div>
`;

createPage('privacy-policy.html', 'Políticas de Privacidad', privacyContent);
createPage('terms.html', 'Términos de Servicio', termsContent);
createPage('about.html', 'Acerca de Vuelo', aboutContent);

console.log("Páginas HTML creadas correctamente.");
