<style lang="scss">
  @import "../styles/main.scss";

  .Main__footer {
    padding: $h2;
    background-color: darken($silver,8%);
    p {
      max-width: $h8;
      font-style: italic;
      margin-bottom: 0;
    }
    ul {
      margin-left: inherit;
    }
    
    @include media(s1) {
      padding: $h4;
      display: grid;
      gap: $h1;
      grid-template-areas:
      "a b"
      ". l"
      ;
      p {
        max-width: $h9;
      }
    }

    @include media(s2) {
      gap: $h2;
    }
  }

  .Bio {
    grid-area: b;
    max-width: $h9;
  }

  .Avatar {
    grid-area: a;
    justify-self: end;

    img {
      border-radius: 50%;
      max-width: $h4;
      margin-bottom: $h0;
    }
  }

  a[target="_blank"]::after {
    display: none;
  }

  .Links {
    grid-area: l;

    @include media(s0) {
      padding-top: $h1;
      padding-bottom: $h1;
    }

    a {
      margin-right: $h0;

      @include media(s1) {
        margin-right: $h1;
      }

      svg {
        width: $h2;

        circle,
        path {
          stroke: none;
        }

        path,
        rect,
        polygon {
          fill: black;

          &:hover {
            fill: $grey;
          }
        }
      }
    }
  }
</style>

<footer class="Main__footer">

  <div class="Avatar">
    <img src="/img/avatar.jpg" alt="Sergio Forés avatar" class="BioAvatar" />
  </div>

  <div class="Bio">
    <p>
      <strong>Sergio Forés</strong>
      es Artista Plástico, Diseñador Gráfico y Desarrollador Frontend/UID. Eterno aprendiz de las denominadas Ciencias Sagradas y apasionado del pensamiento simbólico y la filosofía perenne. Desde 2019, además, modela y realiza impresiones 3D en gran formato y propone una suerte de experiencias sincréticas y holísticas de la Creación desde su proyecto TODH (+0+, tot, thot, 01234)
    </p>
    <small>Más información en las siguientes redes sociales:</small>
  </div>

  <ul class="Links">
    <li>
      <a href="https://www.instagram.com/t.o.d.h/" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <title>logo instagram</title>
          <circle fill="#111111" cx="12.145" cy="3.892" r="0.96" />
          <path d="M8,12c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S10.206,12,8,12z
                M8,6C6.897,6,6,6.897,6,8
                s0.897,2,2,2s2-0.897,2-2S9.103,6,8,6z" />
          <path d="M12,16H4c-2.056,0-4-1.944-4-4V4c0-2.056,1.944-4,4-4h8c2.056,0,4,1.944,4,4v8C16,14.056,14.056,16,12,16z
                M4,2C3.065,2,2,3.065,2,4v8c0,0.953,1.047,2,2,2h8c0.935,0,2-1.065,2-2V4c0-0.935-1.065-2-2-2H4z" />
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/sergiofores/" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <title>logo linkedin</title>
          <path d="M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16h14.7c0.4,0,0.7-0.3,0.7-0.7V0.7
                C16,0.3,15.7,0,15.3,0z M4.7,13.6H2.4V6h2.4V13.6z
                M3.6,5C2.8,5,2.2,4.3,2.2,3.6c0-0.8,0.6-1.4,1.4-1.4c0.8,0,1.4,0.6,1.4,1.4
                C4.9,4.3,4.3,5,3.6,5z
                M13.6,13.6h-2.4V9.9c0-0.9,0-2-1.2-2c-1.2,0-1.4,1-1.4,2v3.8H6.2V6h2.3v1h0c0.3-0.6,1.1-1.2,2.2-1.2
                c2.4,0,2.8,1.6,2.8,3.6V13.6z" />
        </svg>
      </a>
      <a href="https://medium.com/@todh" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <title>logo medium</title>
          <path
            d="M15,0H1A1,1,0,0,0,0,1V15a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V1A1,1,0,0,0,15,0ZM13.292,3.791l-.858.823a.251.251,0,0,0-.1.241V10.9a.251.251,0,0,0,.1.241l.838.823v.181H9.057v-.181l.868-.843c.085-.085.085-.11.085-.241V5.993L7.6,12.124H7.271l-2.81-6.13V10.1a.567.567,0,0,0,.156.472l1.129,1.37v.181h-3.2v-.181l1.129-1.37a.547.547,0,0,0,.146-.472V5.351A.416.416,0,0,0,3.683,5l-1-1.209V3.61H5.8L8.2,8.893,10.322,3.61h2.971Z" />
        </svg>
      </a>
      <a href="https://twitter.com/t0tinspire" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <title>logo twitter</title>
          <path
            d="M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1
                C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7
                c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3
                c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z" />
        </svg>
      </a>
      <a href="https://github.com/t0t" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <title>logo github</title>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8,0.2c-4.4,0-8,3.6-8,8c0,3.5,2.3,6.5,5.5,7.6
                C5.9,15.9,6,15.6,6,15.4c0-0.2,0-0.7,0-1.4C3.8,14.5,3.3,13,3.3,13c-0.4-0.9-0.9-1.2-0.9-1.2c-0.7-0.5,0.1-0.5,0.1-0.5
                c0.8,0.1,1.2,0.8,1.2,0.8C4.4,13.4,5.6,13,6,12.8c0.1-0.5,0.3-0.9,0.5-1.1c-1.8-0.2-3.6-0.9-3.6-4c0-0.9,0.3-1.6,0.8-2.1
                c-0.1-0.2-0.4-1,0.1-2.1c0,0,0.7-0.2,2.2,0.8c0.6-0.2,1.3-0.3,2-0.3c0.7,0,1.4,0.1,2,0.3c1.5-1,2.2-0.8,2.2-0.8
                c0.4,1.1,0.2,1.9,0.1,2.1c0.5,0.6,0.8,1.3,0.8,2.1c0,3.1-1.9,3.7-3.7,3.9C9.7,12,10,12.5,10,13.2c0,1.1,0,1.9,0,2.2
                c0,0.2,0.1,0.5,0.6,0.4c3.2-1.1,5.5-4.1,5.5-7.6C16,3.8,12.4,0.2,8,0.2z" />
        </svg>
      </a>
      <a href="https://www.facebook.com/TODH-2139705836275088" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <title>logo facebook</title>
          <path
            d="M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16H8v-5H6V8h2V6c0-2.1,1.2-3,3-3
                c0.9,0,1.8,0,2,0v3h-1c-0.6,0-1,0.4-1,1v1h2.6L13,11h-2v5h4.3c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z" />
        </svg>
      </a>
      <a href="https://unsplash.com/@todh" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <title>logo medium</title>
          <rect x="5" width="6" height="4.5" />
          <polygon points="11 7 16 7 16 16 0 16 0 7 5 7 5 11.5 11 11.5 11 7" />
        </svg>
      </a>
      <a href="https://dribbble.com/t0t" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"/></svg>
      </a>
    </li>
  </ul>

  <div class="Player">
    
  </div>

</footer>