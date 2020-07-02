<script>
    import {
        Swipe,
        SwipeItem
    } from "svelte-swipe";
    import PageTitle from "../components/PageTitle.svelte";
    import Content from "../components/Content.svelte";
    import ContentArea from "../components/ContentArea.svelte";
    import Area from "../components/Area.svelte";
    import Banner from '../components/Banner.svelte';
    import Nav from "../Nav.svelte";
    import Loading from "../components/Loading.svelte";
    import CodeBlock from "../components/CodeBlock.svelte";
    import TODH from "../components/TODH.svelte";
    import ToggleMenu from "../components/ToggleMenu.svelte";
    import BlockQuote from "../components/BlockQuote.svelte";
    import Button from "../components/Button.svelte";
    import Cards from "../components/Cards.svelte";
    import Card from "../components/Card.svelte";
    import SiteBrand from "../components/SiteBrand.svelte";
    import List from "../components/List.svelte";
    import Tag from "../components/Tag.svelte";
    import Figure from "../components/Figure.svelte";
    import IconEspiral from "../components/icons/IconEspiral.svelte";
    import IconCuatro from '../components/icons/IconCuatro.svelte';
    import {
        Tabs,
        TabList,
        TabPanel,
        Tab
    } from '../components/tabs.js';

    let autoplay = false;
    let delay = 2000; //ms
    let showIndicators = false;
    let transitionDuration = 1000; // ms
    let defaultIndex = 3; // start from 0

    import {
        codeBlocks
    } from "../store/codeblocks.js";
</script>

<style lang="scss">
    @import "../styles/main.scss";

    .swipe-holder {
        height: 40vh;
        width: 100%;
        margin-top: $h2;
    }
</style>

<PageTitle pageTitle="Hello cosmos!" pageSubTitle="Living metadesign system 🧘🏻‍♂️" />

<svelte:head>
    <title>TODH</title>
</svelte:head>

<Content>
    <ContentArea>

        <Area title="TODH en el prototipado Frontend">
        <p><strong>Veamos un prototipo Frontend en alta definición (este mismo sitio es un ejemplo), y veámoslo desde sus 4 dimensiones básicas: </strong>
            <Tag tag="Javascript" isCode={true} /> (motor),
            <Tag tag="CSS" isCode={true} /> (apariencia),
            <Tag isCode={true} tag="Html" /> (estructura) y
            <Tag tag="Json" isCode={true} /> (contenidos).</p>
        <p>Como venimos viendo en TODH cada una de estas dimensiones tiene una función, unas cualidades, una energía...
            que unidas constituyen un "todo" que es <em>más que la suma de sus partes</em>. Trataré de que veamos cómo
            hasta cuando desarrollamos productos digitales seguimos unas pautas, un ordenamiento y unas directrices que
            son en realidad ¡universales!.</p>

        <CodeBlock language="javascript" code={$codeBlocks[0].code_javascript} header="Fuego" />
        <p>
            <Tag tag="Javascript" isCode={true} /> es el que decide cómo se van a comportar todos. Dirige el cotarro.
            Decide y determina cuáles serán las funciones o acciones que se van a llevar a cabo. En un sitio web se
            cumple su voluntad sí o sí.</p>
        <p>No es fácil de aprender pero su poder no tiene límites. Es el fuego, es el pensamiento, la voluntad, el motor
            que mueve las cosas y el que las procesa. Su arquetipo es Marte, el guerrero y el rey con potestad para
            imbiscuirse en los asuntos de todos los demás.</p>

        <CodeBlock language="css" code={$codeBlocks[0].code_scss} header="Agua" />
        <p>La hoja de estilos se encarga del aspecto visual, el tono, la consistencia, la armonía, el ritmo, las proporciones, la empatía con el usuario, lo cognitivo, la interfaz grafica, el sabor. El
            <Tag tag="CSS" isCode={true} /> dota de identidad a los distintos elementos de la App.</p>
        <p>No por casualidad su elemento es el agua y el número dos, porque media entre lo de dentro y lo de afuera, entre el observador y lo observado.</p>

        <CodeBlock language="html" code={$codeBlocks[0].code_markup} header="Tierra" />
        <p>El
            <Tag isCode={true} tag="Html" />, o lenguaje de marcado, nos dará la base sobre la que se edifica todo. Es la estructura de nuestro sitio. Es el elemento que da cuerpo, que baja, cristaliza y posibilita las ideas.
            Es el sentido de realidad tan necesario. Al
            <Tag isCode={true} tag="Html" /> le interesa la practicidad, la accesibilidad. Es el lienzo donde todo ocurre y se manifiesta. Es el organizador, el soporte de las cosas.</p>

        <CodeBlock language="json" code="{$codeBlocks[0].code_json}" header="Aire" />
        <p>Y llegamos al contenido, al mensaje, el vínculo con el otro. Es el reino del lenguaje y la conexión. En la
            mitología romana era representado por Mercurio y en la griega era Hermes. </p>

        <p>Uno de los formatos que más se usa es
            <Tag tag="Json" isCode={true} />, un estándar para el intercambio de información. Innumerables webs se
            conectan a servicios API Rest que consumen datos. Tiene que ver con el arquetipo del mensajero "alado".</p>

        </Area>

        <Area>
        <p><strong>Cualquier ser, cualquier 'algo' requiere de estas 4 dimensiones:</strong></p>

        <List type="numbered">
            <li>Una mente o principio conceptual. Un propósito.</li>
            <li>Una piel sensible que lo contiene y le proporciona identidad</li>
            <li>Un vínculo y conexión con el mundo externo</li>
            <li>Un cuerpo o forma concreta que le de realidad y soporte</li>
        </List>

        <p>Cuatro dimensiones que 'van juntas' y determinan la Unidad. Y eso es lo único que hay, la Unidad, el Uno y
            sus dvisiones o partes. Y no es algo me me haya inventado yo, lo decía Pitágoras cinco siglos antes de
            Cristo.</p>

        <p>Y aquí señores está toda la miga del asunto, entendida la naturaleza cuaternaria de un prototipo podemos ya
            pasar a una fase en la que vemos actuar todo esto en equilibrio y también cómo se anida en sistemas hacia
            arriba, en lo macro, y hacia adentro, en lo micro.</p>

        <p>¿Cómo lo hacemos? Hay miles de maneras distintas pero yo os voy a hablar de la que yo uso ahora mismo y la
            que mejor me funciona a mi.</p>

        <p>El mundo Front ha experimentado una gran evolución y transformación desde la época de los 90 del siglo XX.
            Sus inicios fueron rudimentarios comparados con cómo está ahora el tema y las webs se caracterizaban por ser
            construidas 'a mano' por un tipo que sabía de html, css, javascript, el antigüo <em>Webmaster</em>. Desde
            ahí una escalada exponencial creciente de herramientas, perfiles, metodologías fue dotando al Front de más
            capacidad, especialización, rapidez, etc pero también de mucha más complejidad. Gestores de tareas fueron
            apareciendo para facilitar el trabajo de concatenar javascript, preprocesar css, hacer los builds, etc,
            aparecen gestores de dependencias como NPM, Bower, etc. Y fueron apareciendo librerías o frameworks como
            React, Angular, Vue... que aportan toda una serie de buenas cosas como la componentización, etc... </p>
        <p>El ecosistema de herramientas, métodologías o formas de trabajar fue creciendo y hablar de ello es
            francamente para mí inabarcable... Pero en esta inmensa torre de Babel del panorama front actual que ni
            puedo ni quiero abordar, hay una serie de propuestas, métodos y herramientas que recuperan ese espíritu
            artesanal de los 90 sin renunciar a muchos de los logros que se han conseguido por el camino.</p>

        <p>Personalmente simpatizo y me encuentro a gusto con éste Stack </p>

        <List type>
            <li>Generadores de webs estáticas, JAMStack, SPA's que pueden consumir Servicios API Rest.</li>
            <li>Adiós al Shadow <acronym title="Document Object Model">DOM</acronym> y otras bondades de Svelte.</li>
            <li>Living design Systems y Styleguides</li>
        </List>

        <p>Cuando le coges el gusto a prototipar directamente en el navegador y al uso de los inspectores de navegador se
            te hace raro volver a Sketch App o Axure y es que nada es comparable a la certeza de saber cómo se va a
            comportar tu diseño en un navegador al 100%.</p>

        <p><strong>Mi entorno local ideal para prototipado web:</strong></p>

        <List type>
            <li>
                <Tag tag="Sveltejs" /> Realiza toda la gestión de tareas automáticamente y te devuelve un
                <em><strong>build</strong></em> de un sitio estático que es una <acronym
                    title="Single Page Application">SPA</acronym>. En mi opinión representa el inicio de un nuevo
                paradigma en el desarrollo web. 🌈😱 <a href="https://svelte.dev/" target="_blank">svelte.dev</a>
            </li>
            <li>
                <Tag tag="Routify" /> Genera enrutamiento para Single Page Applications, meta tags, etc.</li>
            <li>
                <Tag tag="Sass" />Preprocesado del CSS </li>
            <li>
                <Tag tag="Git" /> Control de versiones y Deployments (también Now, Netlify)</li>
        </List>

        <p>Diseñar, maquetar y hasta publicar prototipos de máxima definición vuelve a ser relativamente fácil y simple
            y ¡absolutamente divertido!</p>

        <CodeBlock language="javascript" code="{$codeBlocks[0].code_default}" header="Component.svelte" />

        </Area>

        <Area title="Componentización">
        <p>Sistemas vivientes de diseño, Svelte, atomización, fractalidad, micro/macro, hermetismo, fragmentación y
            defragmentación, la división de la Unidad.</p>
        </Area>

        <Area title="Icons and graphics">
        <div>
            <IconEspiral />
            Full size
        </div>
        <div>
            <IconEspiral size="300px" />
            Fixed custom size
        </div>
        <div>
            <IconEspiral size="24px" />
            Icon size
        </div>
        </Area>

        <Area title="Figure">
        <Figure caption="The caption">
            <img src="img/img0.jpg" alt="Alt text">
        </Figure>
        </Area>

        <Area title="Toggle Menu">
        <ToggleMenu />
        </Area>

        <Area title="Buttons">
        <Button variante={0} text="Button" />
        <Button variante={1} text="Variante 1 de Button" />
        </Area>

        <Area title="Brand">
        <SiteBrand />
        </Area>

        <Area title="Colors">
        <div class="Colors">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </Area>

        <Area title="Grid Layout">
        <div class="StyleGuide Main">
            <div class="StyleGuide Main__brand"></div>
            <div class="StyleGuide  Main__nav"></div>
            <div class="StyleGuide  Main__header"></div>
            <div class="StyleGuide  Main__content">
                <div class="StyleGuide  Content">
                    <div class="StyleGuide  Content__header"></div>
                    <div class="StyleGuide  Content__nav"></div>
                    <div class="StyleGuide  Content__area">
                        <article class="StyleGuide  Area"></article>
                        <article class="StyleGuide  Area"></article>
                        <article class="StyleGuide  Area"></article>
                    </div>
                    <div class="StyleGuide  Content__footer"></div>
                </div>
            </div>
            <div class="StyleGuide  Main__footer"></div>
            <div class="StyleGuide  Main__totop"></div>
        </div>
        </Area>

        <Area title="Full Simple Card">
        <Card title="Title" description="Lorem ipsum dolor sit amet consectetur adipisicing." variante={2} />
        </Area>

        <Area title="Group Cards">
        <Cards>
            <Card title="Title"
                description="El ojo que ves no es ojo porque tú lo veas; es ojo porque te ve. (Antonio Machado)"
                variante={1}>
                <Button variante={1} text="Button" />
            </Card>

            <Card title="Variante 3"
                description="La auténtica felicidad consiste en la contemplación de la belleza y el orden del cosmos. _Aristóteles"
                image="img/img1.jpg" />

            <Card title="With inlne svg instead image"
                description="Todo símbolo tiene un poder resonante, éste depende de su forma, contenido e intención. (Adrià García)"
                variante={4} hasImage={false} hasInlineSvg={true}>
                <span slot="hasSvg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round"
                        stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 169 169">
                        <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke"
                            transform="matrix(.03822 0 0 .03822 -452.1 -33.668)" />
                        <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke"
                            transform="matrix(.03822 0 0 .03822 -536 -33.668)" />
                        <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke"
                            transform="matrix(.03822 0 0 .03822 -493.61 -33.668)" />
                        <circle cx="15135.5" cy="3089.34" r="1097.64" fill="none" vector-effect="non-scaling-stroke"
                            stroke-width="13.08" transform="matrix(.07644 0 0 .07644 -1072.51 -151.74)" />
                    </svg>
                </span>
            </Card>

            <Card title="Éste card no lleva imagen" hasImage={false}
                description="Para componer el mundo ha sido precisa la totalidad de cada uno de los cuatro elementos. Porque con todo el fuego, con toda el agua, con todo el aire, con toda la tierra, le ha formado el Supremo Ordenador. __Platón, Timeo"
                variante={3} />

            <Card title="Éste tampoco..." hasImage={false}
                description="Ama tu ritmo y ritma tus acciones bajo su ley, así como tus versos; eres un universo de universos y tu alma una fuente de canciones. Rubén Darío"
                variante={0} />
        </Cards>
        </Area>

        <Area title="Images">
        <img src="img/img0.jpg" alt="">
        </Area>
    </ContentArea>
        <Banner variante={0}>
            <BlockQuote variante={1} quote="Es bueno repetir incluso dos veces lo que es necesario."
                author="Empedocles" />
            <BlockQuote variante={0}
                quote="Son cuatro los principios materiales de la realidad y se hallan en constante movimiento... todo es mezcla y modificación de lo mezclado."
                author="Empedocles" />
        </Banner>

        <Banner variante={1}>
            Banner with simple text inside
        </Banner>

        <Banner variante={2}>
            Banner with simple text inside
        </Banner>
    <ContentArea>
        <Area title="Tabs">
        <Tabs>
            <TabList>
                <Tab>Tab 1</Tab>
                <Tab>Tab 2</Tab>
                <Tab>Tab 3</Tab>
                <Tab>Tab 4</Tab>
            </TabList>

            <TabPanel>
                Tab panel 1
            </TabPanel>

            <TabPanel>
                Tab panel 2
            </TabPanel>

            <TabPanel>
                Tab panel 3
            </TabPanel>

            <TabPanel>
                Tab panel 4
            </TabPanel>
        </Tabs>
        </Area>

        <Area title="Component Header">
        <PageTitle pageTitle="Page title" pageSubTitle="Page Subtitle" />
        </Area>

        <!-- <Area title="Fetching Json data from service"> -->
        <!-- {#await loadedJson}
            <Loading/>
        {:then data}
            <Cards>                
                {#each data.demo as demo}
                <Card 
                    title={demo.title} 
                    description={demo.description}
                    image={demo.img}
                />
                {/each}
            </Cards>
        {:catch error}
            <p>An error occurred!</p>
        {/await} -->
        <!-- </Area> -->

        <div class="swipe-holder">
            <Swipe {showIndicators} {autoplay} {delay} {transitionDuration} {defaultIndex}>
                <SwipeItem>
                    <img src="img/img0.jpg" alt="">
                </SwipeItem>
                <SwipeItem>
                    <img src="img/img4.jpg" alt="">
                </SwipeItem>
                <SwipeItem>
                    <img src="img/img2.jpg" alt="">
                </SwipeItem>
                <SwipeItem>
                    <img src="img/img3.jpg" alt="">
                </SwipeItem>
            </Swipe>
        </div>
    </ContentArea>
        <Banner variante={0}>
            <BlockQuote variante={1}
                quote="En el universo hay cosas que son conocidas y hay cosas que son desconocidas y entre ellas hay puertas..."
                author="William Blake" />
        </Banner>
        <Banner variante={1}>
            <BlockQuote variante={2}
                quote="The universe exists solely of waves of motion... There exists nothing other than vibration"
                author="Walter Russell" />
            <IconEspiral />
        </Banner>
        <Banner variante={2}>
            <IconEspiral />
            <BlockQuote variante={0}
                quote="Para conocer los secretos del Universo piensa en términos de energía, frecuencia y vibración."
                author="Nikola Tesla" />
        </Banner>

</Content>