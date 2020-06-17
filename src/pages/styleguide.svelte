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
    import ToggleMenu from "../components/ToggleMenu.svelte";
    import BlockQuote from "../components/BlockQuote.svelte";
    import Button from "../components/Button.svelte";
    import Cards from "../components/Cards.svelte";
    import Card from "../components/Card.svelte";
    import SiteBrand from "../components/SiteBrand.svelte";
    import List from "../components/List.svelte";
    import Figure from "../components/Figure.svelte";
    import IconEspiral from "../components/icons/IconEspiral.svelte";
    import IconCuatro from '../components/icons/IconCuatro.svelte';
    import {
        Tabs,
        TabList,
        TabPanel,
        Tab
    } from '../components/tabs.js';
    // let seconds = 0;
    // setInterval(() => seconds += 1, 10000);
    let autoplay = false;
  let delay = 2000; //ms
  let showIndicators = false;
  let transitionDuration = 1000; //ms
  let defaultIndex = 3; //start from 0
</script>

<style lang="scss">
    @import "../styles/main.scss";
    .swipe-holder {
        height: 40vh;
        width: 100%;
        margin-top: $h2;
    }
</style>

<PageTitle pageTitle="Design System" pageSubTitle="Living styleguide 👋" />

<Content>
<ContentArea>

    <Area title="El proceso de la incursión">
        <p><em>Lo que hacemos, sentimos, decimos y pensamos es la misma cosa.</em> Por eso es que la humanidad ha pretendido desde siempre separar estos cuatro principios o dimensiones del ser. TODH va en dirección "contraria". No es una explosión sino una implosión.</p>
        <p>Este proyecto que denomino TODH se centró primeramente en comprender el núcleo, la esencia, de estos 4 principios constitutivos de la realidad. Así que en primera instancia uno se adentra en el símbolo para registrar lo más hondo de que es capaz, <u>atravesando la superfície de las cosas</u>, percibiendo lo idéntico en lo diferente.</p>
        
        <BlockQuote variante={1} quote="En el mar increado de Nun bullían millones de pececillos y sin embargo inexistían pues que esperaban ansiosos a picar en el anzuelo de Isis a fin de pasar de la inexistencia a la existencia." author="Ash-Shamsi: Kitab hayati qawmiyati al-mummiyat" />

        <h4>Toma de consciencia</h4>
        <p><em>El hacer</em> no es visto sólamente como un verbo sino que a un nivel más profundo es lo que está ocurriendo ahora mismo. Es el tiempo, el elemento tierra, es la vida, es el cuaternario, es la cruz y el cuadrado, son los ejes de la tierra, las estaciones del año... y así indefinidamente. Un montón de cosas son <em><strong>hacer</strong>.</em></p> 
        <p>Hacer es estar viviendo, habitar un cuerpo. Ser un cuerpo. Ser materia. Incluso la muerte, que puede ser entendida como el fin de toda actividad tiene que suceder en algún momento. Tiene que <em>estar pasando</em> tarde o temprano. El hacer es la experiencia misma. Cualquier experiencia. Cualquier manfestación. La duración, la vigencia, los hechos, la prueba de las cosas. Nada puede no-hacerse. Los pensamientos, cuando se producen, se hacen, suceden. Aunque pensemos en la no-acción, ya estamos haciendo algo; pensar. Las cosas sólo pueden n<strong>hacer</strong>. (nacer)</p>
        <p>La mente humana, la mente concreta sólo sabe hacer una cosa; construir objetos, ya sean éstos virtuales o físicos, no importa, todo es un objeto si cumple la condición de estar en alguna parte...</p>
        <p>Podrámos decir que el hacer es cualquier forma que adopta el momento presente. Pero no me interesa perderme en ese despliegue, es imposible abarcar la multiplicidad y fragmentación del mundo, del colectivo... para eso ya está el mundo y el colectivo, lo que sí puedo hacer es comprenderme a mi mismo, la semilla que soy, la singularidad holística que me habita... y entrar más adentro, al origen común de las cosas. Porque son sólo 4 cosas y así es más fácil comprender.</p>
        <p>Decía antes que las cosas sólo pueden <em>hacerse</em>, y esto significa que <strong>nacen del ser</strong>. Qué bonita expresión. Porque, el ser, es otro de los cuatro elementos constitutivos primigenios de la realidad. Osea que también hay otro montón de cosas análogas al ser, al 1, la Unidad, que diría Pitágoras. Y que decir del decir... y qué decir del sentir...</p>
        <p>Siempre es lo mismo; 1, 2, 3, 4 y.. 0! En esta primera fase de incursión a TODH uno se da cuenta de la estructura invisible que vertebra la realidad es en realidad visible. Resulta paradógico pero es así. Es como darse cuenta de que las gafas que andabas buscando las llevabas puestas. Es insultantemente obvio y maravilloso.</p>
        <p>La mente abstracta es capaz de registrar las relaciones entre los objetos. Digamos que es un paso más allá. Usándola uno es capaz de percibir la analogía que baña todas las cosas, lo que las cosas tienen en común. El decir, al igual que pasaba con el hacer, adopta una dimensión más profunda y a la vez más extensa. Es el lenguaje poético, es el símbolo, es la relación, es el tercer punto que conecta otros dos. El decir es el color, el perfume de una rosa que le dice al mundo que existe. No sólo es sino que también se pronuncia, transmite, se vincula con otros "algos".</p>
        <p>Me tiré años creando mapas mentales, nubes de palabras y conceptos, observando la relación de las cosas, fascinado por la rotundidad y la magia que es todo este castillo de naipes de la vida, la cultura, el conocimiento... que se construye sobre algo tan elemental, y nunca mejor dicho, como los 5 elementos. Que son los números-idea de los que hablaba ya Pitágoras 5 siglos antes de Cristo.</p>
        <p>Don Quijote es fuego (1) y aire (3), Sancho Panza es tierra (4) y agua (2). De repente llega a tí cualquer cosa y lo primero que haces es encontrar qué parte de esa cosa es 1 qué parte es 2, 3, 4 y 0. La astrología, la alquimia, la geometría, filosofía presocrática, Platón, la Tempestad de Shakespeare, las cosmogonías Mesopotámica y Egpcia... todo me habla de TODH, todo se ha construido siempre y se sigue construyendo en base a estas 5 dimensiones. Uno cae en una especie de fascinación de ver y comprobar una y otra vez la especie de telón de fondo o tapiz que sirve de guión de esta película.</p>
        <p>Este tipo de "risa", de plenitud, de comprensión, de "euforia callada" sólo se comprende si le ocurre uno, no es algo para todo el mundo, es facil de experimentar pero hay que hacer algo muy difícil, sólo una cosa, tienes que estar abierto a ello y darte cuenta si es que te ocurre.</p>
        <h4>Fase 2, lo mismo pero de otra manera</h4>
        <p>A medida que uno integra este modo de percibir van tomando más peso conceptos como <strong>la analogía, el símbolo, la función o el orden,</strong> entre otros. Y los vas trayendo a tu vida de una forma más meticulosa y práctica. Digo esto porque es facil llegados a este punto creerse que sabes de qué va la vida, que lo comprendes todo, cuando en realidad no tenemos ni puñetera idea. Ves que incluso los problemas que te asaltan, los peligros, los conflictos y dificultades son también parte del guión de la vida. Nada escapa de lo que es. Tu vida se convierte en un "Viaje del héroe" vivido en primera persona, vas a seguir quieras o no, las fases que atravesa el héroe de cualquier historia, tendrás mentores que te ayudarán, elixires mágicos que te darán poderes, dragones que vencer, cuevas donde esconderte, las mismas pruebas que superar, y sólo cambia una cosa; que ahora lo sabes.</p>
        <p>Se produce un cierto desencantamiento agridulce. Todo tu mundo que puede ser super especial y único es a la vez ordinario, popular y en cierto modo predecible.</p>
        <p>Hay un orden mayor lo dirige todo, te guste o no. Ahora ya no es una especulación, una teoría, lo tienes claro. Las experiencias que vivas siempre van a estar teñidas por tu configuración específica, digamos que por la composición fíquica, psíquica y emocional que tengas.</p>
        <p>Tu modo de funcionar en el mundo está regido por "tu composición". Percibes al otro en función de la cantidad de agua que tengas, comunicas en función de la mayor o menor presencia de aire en tu organismo. Disciernes, decides o piensas en función de tu fuego, tu ímpetu, tu intuición... y tus acciones, tus obras estarán marcadas por la manera en que manifiestas la energía del 4.</p>
        <p>La ignorancia de lo que hay de mejor <em>(en el hombre)</em> sirve fatalmente a lo que de peor hay en él. (Hierocles)</p>
        <p>Todo ello dependerá, obviamente, del uso que les des, tienes cierto margen de maniobra, claro, cierta libertad pero si eres un olmo dejarás de actuar como una higuera. Llegará la coherencia a tu vida. En esta fase existe cierto desencantamiento o desilusión pero lo único que se rompe en realidad es tu falsa creencia de que eso que llamas tú es algo separado del universo. Un dia te irás de igual modo que un día viniste, como la primavera.</p>
        <p>En esta fase, incorporas la percepción TODH de que todo es lo mismo, viene de lo mismo y va a lo mismo. La diferencia es sólo ilusión.</p>
        <p>Separar deja de tener sentido. No puedes separar tus aficiones, de tu empleo o tu familia. Eres la misma persona cuando juegas con tu hijo que cuando trabajas. Ya no puedo diferenciar mi yo que maqueta sitios web, "mi yo" que escribe, que pinta, que imprime objetos en 3D... Veo filosofía en las cascadas de estilos, en el HTML, en Git... Sólo veo lenguaje, símbolo o analogía. Formas que dan tierra a ideas de fuego, viento que me lleva hasta el lenguaje poético que es lo más lejos y cerca que puedo estar de lo que soy en esencia.</p>
        <p>Veo simplemente el proceso. Actualizo mi potencial en coherencia. Abandono falsas ilusiones que una vez me creí. Despejo una y otra vez la incógnita que sigue estando. Proceso, es lo que hay. Creación manifestandose. Dinámicas, patrones que se repiten. Todo ordenado, establecido, todo infestado de sentido. Todo lógico e ilógico a la vez. Sin secreto pero misterioso. Inacabado pero completo.</p>
        
        <BlockQuote variante={1} quote="El hombre inteligente no es el que tiene muchas ideas, sino el que saca provecho de las pocas que tiene." author="J. Dotras" />

        <p>La ciencia no puede resolver el último misterio de la naturaleza. Y eso se debe a que, en última instancia, nosotros mismos somos una parte del misterio que estamos tratando de resolver. __Max Planck</p>
    
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
        <Card 
        title="Title" description="Lorem ipsum dolor sit amet consectetur adipisicing."
        variante={2}
        />
    </Area>

    <Area title="Group Cards">
        <Cards>
            <Card 
            title="Title" description="El ojo que ves no es ojo porque tú lo veas; es ojo porque te ve. (Antonio Machado)"
            variante={1}
            >
                <Button variante={1} text="Button" />
            </Card>
        
            <Card 
            title="Variante 3"
            description="La auténtica felicidad consiste en la contemplación de la belleza y el orden del cosmos. _Aristóteles"
            image="img/img1.jpg" 
            />
        
            <Card 
            title="With inlne svg instead image"
            description="Todo símbolo tiene un poder resonante, éste depende de su forma, contenido e intención. (Adrià García)"
            variante={4}
            hasImage={false} hasInlineSvg={true}>
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

            <Card 
            title="Éste card no lleva imagen"
            hasImage={false}
            description="Para componer el mundo ha sido precisa la totalidad de cada uno de los cuatro elementos. Porque con todo el fuego, con toda el agua, con todo el aire, con toda la tierra, le ha formado el Supremo Ordenador. __Platón, Timeo"
            variante={3}
            />

            <Card title="Éste tampoco..." hasImage={false} description="Ama tu ritmo y ritma tus acciones bajo su ley, así como tus versos; eres un universo de universos y tu alma una fuente de canciones. Rubén Darío"
            variante={0}/>
        </Cards>
    </Area>

    <Area title="Images">
        <img src="img/img0.jpg" alt="">
    </Area>

    <Banner variante={0}>
        <BlockQuote variante={1} quote="Es bueno repetir incluso dos veces lo que es necesario." author="Empedocles" />
        <BlockQuote variante={0} quote="Son cuatro los principios materiales de la realidad y se hallan en constante movimiento... todo es mezcla y modificación de lo mezclado." author="Empedocles" />
    </Banner>

    <Banner variante={1}>
        Banner with simple text inside
    </Banner>
    
    <Banner variante={2}>
        Banner with simple text inside
    </Banner>

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
    
      <Banner variante={0}>
        <IconEspiral />
        <BlockQuote variante={1} quote="En el universo hay cosas que son conocidas y hay cosas que son desconocidas y entre ellas hay puertas..." author="William Blake" />
    </Banner>
    <Banner variante={1}>
        <BlockQuote variante={2} quote="The universe exists solely of waves of motion... There exists nothing other than vibration" author="Walter Russell" />
        <IconEspiral />
    </Banner>
    <Banner variante={2}>
        <IconEspiral />
        <BlockQuote variante={0} quote="Para conocer los secretos del Universo piensa en términos de energía, frecuencia y vibración." author="Nikola Tesla" />
    </Banner>

</ContentArea>
</Content>