<template>
  <div>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="columns">
        <div class="column is-12">
          <div class="container content">
            <i class="is-large fab fa-discord"></i>
            <i class="is-large fas fa-code"></i>
            <h1 class="title">Code <em>All</em> The Things</h1>
            <h3 class="subtitle">
              Collection of code goodies for next-level dev
            </h3>
            <a href="https://github.com/BulmaTemplates/bulma-templates" target="_blank"
               class="button is-primary is-large">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <aside class="is-medium menu">
            <p class="menu-label">
              categories
            </p>
            <ul class="menu-list">
              <li class="is-right"><a href="#const" class="is-active"><i
                class="fab fa-css3-alt"></i> CSS</a></li>
              <li><a href="#let" class="is-active"><i class="fab fa-js"></i> JS</a></li>
              <li><a href="#let" class="is-active"><i class="fab fa-html5"></i> HTML</a></li>
            </ul>
            <p class="menu-label">
              More to read...
            </p>
            <ul class="menu-list">
              <li><span class="tag is-white is-medium">Lorem</span></li>
              <li><span class="tag is-white is-medium">Ipsum</span></li>
              <li><span class="tag is-white is-medium">Dolor</span></li>
              <li><span class="tag is-white is-medium">Animi</span></li>
              <li><span class="tag is-white is-medium">Eximi</span></li>
              <li><span class="tag is-white is-medium">Nullius</span></li>
              <li><span class="tag is-white is-medium">Oxipi</span></li>
              <li><span class="tag is-white is-medium">Vultus</span></li>
              <li><span class="tag is-white is-medium">Voluptatis</span></li>
              <li><span class="tag is-white is-medium">Exomarphis</span></li>
              <li><span class="tag is-white is-medium">Finimi</span></li>
              <li><span class="tag is-white is-medium">Aenigma</span></li>
              <li><span class="tag is-white is-medium">Arkham</span></li>
              <li><span class="tag is-white is-medium">Blue</span></li>
              <li><span class="tag is-white is-medium">Medium</span></li>
            </ul>
          </aside>
        </div>
        <div class="column is-9">
          <div class="content is-medium">
            <h3 class="title is-3">Snippets ¯\_(ツ)_/¯</h3>
            <div class="box">
              <b-button @click="">testdb</b-button>
              <article class="message is-primary">
                  <span class="icon has-text-primary">
                  <i class="fab fa-js"></i>
                  </span>
                <div class="message-body">
                  Block-scoped. Cannot be re-assigned. Not immutable.
                </div>
              </article>
              <pre><code class="language-javascript">const test = 'test';</code></pre>
            </div>
            <div class="box">
              <h4 id="let" class="title is-3">let</h4>
              <article class="message is-primary">
                <span class="icon has-text-primary">
                  <i class="fas fa-info-circle"></i>
                </span>
                <div class="message-body">
                  Block-scoped. Can be re-assigned.
                </div>
              </article>
              <pre><code class="language-javascript">let i = 0;</code></pre>
            </div>
            <h3 class="title is-3">More to Come...</h3>
            <div class="box">
              <h4 id="lorem" class="title is-4">More to come...</h4>
              <article class="message is-primary">
              <span class="icon has-text-primary">
                <i class="fas fa-info-circle"></i>
              </span>
                <div class="message-body">
                  Lorem ipsum dolor sit amet, mea ne viderer veritus menandri, id scaevola gloriatur
                  instructior sit.
                </div>
              </article>
              <pre><code class="language-javascript">let i = 0;</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  methods: {
    sayHello() {
      this.$snackbar.open('Hey buefy is pretty!');
    },
  },
};
</script>
