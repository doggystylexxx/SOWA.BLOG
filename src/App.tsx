import React, { useState } from 'react';
import { 
  Search, 
  User, 
  Tag, 
  Archive, 
  Terminal, 
  Settings, 
  FileText, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Zap 
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'post'>('home');

  const navigateTo = (view: 'home' | 'post') => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopNav navigateTo={navigateTo} />
      
      {currentView === 'home' ? (
        <HomeView navigateTo={navigateTo} />
      ) : (
        <PostView navigateTo={navigateTo} />
      )}
    </div>
  );
}

function TopNav({ navigateTo }: { navigateTo: (view: 'home' | 'post') => void }) {
  return (
    <header className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center px-6 h-16 max-w-7xl mx-auto">
        <button 
          onClick={() => navigateTo('home')}
          className="text-xl font-black tracking-tighter text-primary font-headline hover:opacity-80 transition-opacity"
        >
          SOWA.BLOG
        </button>
        
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
          <button className="text-primary border-b-2 border-primary pb-1">SEO</button>
          <button className="text-on-surface hover:text-primary transition-colors">AI</button>
          <button className="text-on-surface hover:text-primary transition-colors">Dev</button>
          <button className="text-on-surface hover:text-primary transition-colors">Tutorials</button>
          <button className="text-on-surface hover:text-primary transition-colors">seoblog.app</button>
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-surface-container px-3 py-1.5 rounded-sm border border-outline-variant/15">
            <Search size={14} className="text-on-surface-variant mr-2" />
            <span className="text-on-surface-variant font-mono text-[10px]">SEARCH_TERMINAL</span>
          </div>
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-5 py-1.5 text-xs font-bold tracking-tight rounded-sm transition-all hover:scale-95 active:scale-90 duration-200 font-headline">
            LOGIN
          </button>
        </div>
      </div>
    </header>
  );
}

function HomeView({ navigateTo }: { navigateTo: (view: 'home' | 'post') => void }) {
  return (
    <div className="flex flex-1 pt-16">
      {/* Left Sidebar */}
      <aside className="hidden xl:flex h-[calc(100vh-4rem)] w-64 fixed left-0 top-16 flex-col p-4 gap-y-6 bg-surface border-r border-outline-variant/10 z-40">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 bg-surface-container rounded-sm flex items-center justify-center overflow-hidden border border-primary/20">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" 
              alt="Author Portrait" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div>
            <p className="text-primary font-bold font-headline text-sm tracking-tight">Terminal Curator</p>
            <p className="text-on-surface-variant font-mono text-[10px]">v2.0.4-stable</p>
          </div>
        </div>
        
        <nav className="flex flex-col gap-1 font-headline font-medium text-sm">
          <button className="flex items-center gap-3 p-2 text-on-surface/60 hover:text-secondary hover:bg-surface-container-low transition-all duration-150 rounded-sm">
            <User size={18} /> Author
          </button>
          <button className="flex items-center gap-3 p-2 text-on-surface/60 hover:text-secondary hover:bg-surface-container-low transition-all duration-150 rounded-sm">
            <Tag size={18} /> Tags
          </button>
          <button className="flex items-center gap-3 p-2 text-on-surface/60 hover:text-secondary hover:bg-surface-container-low transition-all duration-150 rounded-sm">
            <Archive size={18} /> Archive
          </button>
          <button className="flex items-center gap-3 p-2 text-secondary bg-surface-container rounded-sm transition-all duration-150">
            <Terminal size={18} /> App
          </button>
        </nav>
        
        <div className="mt-auto flex flex-col gap-1 border-t border-outline-variant/10 pt-4">
          <button className="flex items-center gap-3 p-2 text-on-surface/60 hover:text-secondary hover:bg-surface-container-low transition-all duration-150 text-xs font-mono rounded-sm">
            <Settings size={16} /> SETTINGS
          </button>
          <button className="flex items-center gap-3 p-2 text-on-surface/60 hover:text-secondary hover:bg-surface-container-low transition-all duration-150 text-xs font-mono rounded-sm">
            <FileText size={16} /> DOCS
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 xl:ml-64 flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center px-6 md:px-12 py-20 overflow-hidden cyber-grid border-b border-outline-variant/10">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-0"></div>
          <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low border border-primary/20 rounded-sm mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              <span className="text-secondary font-mono text-[10px] tracking-widest uppercase">SYSTEM_STATUS: ONLINE</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-headline tracking-tighter leading-[0.9] text-on-surface mb-8">
              Wszystko o <span className="text-gradient">SEO</span> i technologii
            </h1>
            
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mb-10 font-light leading-relaxed">
              Ekspercka wiedza, techniczne analizy i przyszłość search marketingu w jednym miejscu. Projektowany dla inżynierów wzrostu.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">ROZPOCZNIJ CZYTANIE</button>
              <button className="btn-secondary">TERMINAL_DOCS</button>
            </div>
          </div>

          {/* Abstract Code Element */}
          <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[400px] bg-surface-container-lowest border border-outline-variant/20 rounded-sm p-4 shadow-2xl">
            <div className="flex gap-1.5 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-error-dim"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-secondary/40"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-primary/40"></div>
            </div>
            <div className="font-mono text-[11px] text-secondary/80 space-y-1">
              <p><span className="text-tertiary">fetch</span>(<span className="text-primary">"https://api.seoblog.app/v1/metrics"</span>)</p>
              <p className="pl-4">.then(res =&gt; res.json())</p>
              <p className="pl-4">.then(data =&gt; {'{'}</p>
              <p className="pl-8 text-on-surface-variant">// Optimizing visibility index...</p>
              <p className="pl-8"><span className="text-primary">const</span> score = analyze(data.keywords);</p>
              <p className="pl-8"><span className="text-tertiary">return</span> deploy(score);</p>
              <p className="pl-4">{'}'});</p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 bg-surface-container-low rounded-sm overflow-hidden border border-outline-variant/10">
            <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto cursor-pointer" onClick={() => navigateTo('post')}>
              <img 
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200" 
                alt="AI and SEO Concept" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center">
              <div className="font-mono text-[10px] text-secondary tracking-[0.2em] mb-4">FEATURED_ENTRY // 2024-05-12</div>
              <h2 
                className="text-3xl md:text-5xl font-black font-headline tracking-tighter mb-6 leading-tight cursor-pointer hover:text-primary transition-colors"
                onClick={() => navigateTo('post')}
              >
                Jak AI zmienia SEO w 2024?
              </h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                Analiza ewolucji algorytmów Google pod kątem SGE i roli modeli LLM w tworzeniu treści. Dowiedz się, jak pozostać na szczycie w erze generatywnej.
              </p>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => navigateTo('post')}
                  className="flex items-center gap-2 text-primary font-headline font-bold text-sm group"
                >
                  CZYTAJ ARTYKUŁ 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="px-6 md:px-12 py-12">
          <div className="flex items-end justify-between mb-12 border-b border-outline-variant/10 pb-6">
            <div>
              <h3 className="text-xs font-mono text-on-surface-variant uppercase tracking-widest mb-2">LATEST_TRANSMISSIONS</h3>
              <h2 className="text-4xl font-black font-headline tracking-tight">Najnowsze wpisy</h2>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center bg-surface-container rounded-sm border border-outline-variant/20 text-on-surface hover:text-primary transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-surface-container rounded-sm border border-outline-variant/20 text-on-surface hover:text-primary transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PostCard 
              category="DEV_TECH" 
              date="08_MAY_2024" 
              title="Optymalizacja Core Web Vitals dla Next.js" 
              excerpt="Praktyczny przewodnik po technicznych aspektach wydajności front-endu i ich wpływie na pozycjonowanie w Google."
              tags={['#NEXTJS', '#PERFORMANCE', '#SEO']}
              image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
              onClick={() => navigateTo('post')}
            />
            <PostCard 
              category="ANALYTICS" 
              date="05_MAY_2024" 
              title="Przewodnik po Search Console Insights" 
              excerpt="Jak wyciągać wnioski z danych Google i przekładać je na skuteczną strategię contentową."
              tags={['#GSC', '#STRATEGY', '#DATA']}
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              onClick={() => navigateTo('post')}
            />
            <PostCard 
              category="SECURITY" 
              date="01_MAY_2024" 
              title="Wpływ bezpieczeństwa na Rankingi" 
              excerpt="Dlaczego HTTPS to dopiero początek i jak błędy bezpieczeństwa mogą zrujnować Twoje SEO."
              tags={['#SECURITY', '#HTTPS', '#RANKING']}
              image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
              onClick={() => navigateTo('post')}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-12 py-20">
          <div className="relative bg-surface-container overflow-hidden rounded-sm border border-primary/20">
            <div className="absolute inset-0 cyber-grid opacity-10"></div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/20 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter mb-6">Wznieś swoje SEO na wyższy level.</h2>
                <p className="text-lg text-on-surface-variant mb-8 font-light">Odkryj zaawansowane narzędzia analityczne i automatyzację, której potrzebujesz, by wyprzedzić konkurencję.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button className="bg-primary text-on-primary px-8 py-4 font-headline font-bold text-sm tracking-tight rounded-sm hover:brightness-110 transition-all">
                    Wypróbuj aplikację seoblog.app
                  </button>
                  <button className="text-secondary font-mono text-xs hover:underline flex items-center gap-2 justify-center md:justify-start">
                    <Zap size={14} /> SYSTEM_DEMO_v2.0
                  </button>
                </div>
              </div>
              
              <div className="w-full max-w-md bg-surface-container-lowest border border-outline-variant/30 rounded-sm p-2 shadow-2xl">
                <div className="flex gap-1.5 mb-2 px-2 py-1">
                  <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                  <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                  <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600" 
                  alt="App Dashboard Preview" 
                  className="w-full h-48 object-cover rounded-sm border border-outline-variant/10 grayscale"
                />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

function PostView({ navigateTo }: { navigateTo: (view: 'home' | 'post') => void }) {
  return (
    <div className="flex flex-1 pt-16">
      {/* Tiny Left Sidebar */}
      <aside className="hidden lg:flex flex-col p-4 gap-y-6 bg-surface h-[calc(100vh-4rem)] w-16 fixed left-0 top-16 border-r border-outline-variant/10 z-40 items-center justify-center">
        <div className="flex flex-col gap-8">
          <User size={20} className="text-outline-variant hover:text-primary transition-colors cursor-pointer" />
          <Tag size={20} className="text-outline-variant hover:text-primary transition-colors cursor-pointer" />
          <Archive size={20} className="text-outline-variant hover:text-primary transition-colors cursor-pointer" />
          <div className="bg-surface-container rounded-sm p-2 cursor-pointer border border-primary/20">
            <Terminal size={20} className="text-primary" />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-16 pt-12 pb-20 cyber-grid">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          
          {/* Article Content */}
          <article>
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-secondary-container text-on-secondary-container text-[10px] font-mono font-bold px-2 py-0.5 tracking-widest uppercase rounded-sm">Tutorial</span>
                <span className="text-outline text-[10px] font-mono">ID: SB_2024_089</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black font-headline leading-[0.95] tracking-tighter mb-8 text-on-surface">
                JAK ZAUTOMATYZOWAĆ SEO ZA POMOCĄ SKRYPTÓW PYTHON
              </h1>
              
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-l-2 border-primary-container pl-6 py-2">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-primary uppercase">AUTOR</span>
                  <span className="font-headline font-semibold text-lg">TERMINAL_CURATOR</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-primary uppercase">DATA</span>
                  <span className="font-headline font-semibold text-lg">14.05.2024</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-primary uppercase">READ_TIME</span>
                  <span className="font-headline font-semibold text-lg text-secondary">12_MIN</span>
                </div>
              </div>
            </header>

            <div className="mb-12 relative h-[400px] w-full overflow-hidden rounded-sm group">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200" 
                alt="Server Room" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>

            <div className="prose prose-invert max-w-none prose-headings:font-headline prose-headings:tracking-tight prose-p:text-on-surface-variant prose-p:leading-relaxed prose-li:text-on-surface-variant">
              <p className="text-xl leading-relaxed text-on-surface mb-8 font-light italic border-b border-outline-variant/20 pb-8">
                W świecie nowoczesnego SEO, ręczna analiza tysięcy fraz kluczowych to przeżytek. Skrypty Python pozwalają na masową ekstrakcję danych z Search Console, automatyczną kategoryzację intencji oraz analizę luk w treściach konkurencji.
              </p>
              
              <h2 className="text-3xl font-bold mb-6 mt-12 text-primary font-headline tracking-tight">01 // Inicjalizacja środowiska</h2>
              <p className="mb-6 text-on-surface-variant leading-relaxed">
                Zanim przejdziemy do pisania skryptu, upewnij się, że masz zainstalowane biblioteki <code className="bg-surface-container px-1.5 py-0.5 text-secondary rounded-sm font-mono text-sm">pandas</code> oraz <code className="bg-surface-container px-1.5 py-0.5 text-secondary rounded-sm font-mono text-sm">google-api-python-client</code>. To one stanowią rdzeń naszej operacji automatyzacji.
              </p>

              <TerminalConsole 
                filename="seo_analyzer.py"
                code={
                  <>
<span className="text-tertiary">import</span> pandas <span className="text-tertiary">as</span> pd<br/>
<span className="text-tertiary">from</span> googleapiclient.discovery <span className="text-tertiary">import</span> build<br/>
<br/>
<span className="text-outline-variant italic"># AUTH_KEY_REQUIRED</span><br/>
<span className="text-secondary">def</span> <span className="text-primary">fetch_search_console_data</span>(site_url, start_date, end_date):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;service = build(<span className="text-secondary">'searchconsole'</span>, <span className="text-secondary">'v1'</span>, credentials=creds)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;request = {'{'}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-secondary">'startDate'</span>: start_date,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-secondary">'endDate'</span>: end_date,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-secondary">'dimensions'</span>: [<span className="text-secondary">'query'</span>, <span className="text-secondary">'page'</span>]<br/>
&nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-secondary">return</span> service.searchanalytics().query(siteProperty=site_url, body=request).execute()<br/>
<br/>
<span className="text-outline-variant italic"># RUN_EXECUTION</span><br/>
data = fetch_search_console_data(<span className="text-secondary">'https://sowa.blog'</span>, <span className="text-secondary">'2024-01-01'</span>, <span className="text-secondary">'2024-05-01'</span>)<br/>
<span className="text-primary">print</span>(<span className="text-secondary">f"SYSTEM_INIT: Data packets received."</span>)
                  </>
                }
              />

              <h3 className="text-2xl font-bold mb-4 mt-10 font-headline tracking-tight">Analiza danych i kategoryzacja</h3>
              <ul className="list-none space-y-4 mb-8 pl-0">
                <li className="flex gap-4 items-start">
                  <span className="text-secondary font-mono mt-1">01.</span>
                  <span className="text-on-surface-variant">Pobieranie surowych danych z Google Search Console API.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-secondary font-mono mt-1">02.</span>
                  <span className="text-on-surface-variant">Czyszczenie duplikatów i normalizacja znaków specjalnych.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="text-secondary font-mono mt-1">03.</span>
                  <span className="text-on-surface-variant">Mapowanie intencji (informacyjna, nawigacyjna, transakcyjna) za pomocą prostych Regexów.</span>
                </li>
              </ul>
              
              <p className="mb-8 text-on-surface-variant leading-relaxed">
                Efektem końcowym jest arkusz CSV, który precyzyjnie wskazuje, które podstrony tracą widoczność na kluczowe frazy, a które wymagają jedynie lekkiego odświeżenia treści (Content Refresh).
              </p>
            </div>
          </article>

          {/* Right Sidebar */}
          <aside className="space-y-12">
            {/* Author Info */}
            <section className="bg-surface-container-low p-6 rounded-sm border-l border-secondary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-sm overflow-hidden bg-surface-container-high border border-outline-variant/30 p-1">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" 
                    alt="Author" 
                    className="w-full h-full object-cover opacity-90 grayscale"
                  />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-sm tracking-tight text-on-surface">TERMINAL CURATOR</h4>
                  <p className="text-[10px] font-mono text-outline uppercase tracking-wider">v2.0.4-stable</p>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                Analityk SEO i programista Python. Specjalizuje się w automatyzacji procesów contentowych i inżynierii danych.
              </p>
              <button className="w-full bg-surface-container-high hover:bg-surface-container-highest text-secondary font-mono text-[10px] py-2 border border-secondary/10 transition-all uppercase tracking-widest rounded-sm">
                View_Manifesto
              </button>
            </section>

            {/* Tags */}
            <section>
              <h5 className="text-xs font-mono text-primary mb-6 flex items-center gap-2">
                <Tag size={14} /> DATA_TAGS
              </h5>
              <div className="flex flex-wrap gap-2">
                {['#SEO', '#PYTHON', '#AI', '#AUTOMATION', '#DEV_LOG'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-surface-container text-[11px] font-mono text-on-surface-variant hover:text-secondary hover:bg-surface-container-highest transition-all cursor-pointer rounded-sm border border-outline-variant/10">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* CTA App */}
            <section className="relative group overflow-hidden rounded-sm cursor-pointer">
              <div className="absolute inset-0 bg-primary-container/10 group-hover:bg-primary-container/20 transition-all duration-500"></div>
              <div className="relative p-6 border border-primary/20">
                <h4 className="text-lg font-headline font-black mb-2 tracking-tighter">PRZYSPIESZ SWOJE SEO</h4>
                <p className="text-[11px] text-on-surface-variant mb-6 leading-tight">Uruchom nasze autorskie narzędzie seoblog.app i sprawdź audyt w 30 sekund.</p>
                <button className="w-full bg-primary-container text-on-primary-container py-3 font-headline font-bold text-xs tracking-widest flex items-center justify-center gap-2 group-hover:gap-4 transition-all rounded-sm">
                  <span>LAUNCH_APP</span>
                  <Terminal size={14} />
                </button>
              </div>
            </section>
          </aside>
        </div>

        {/* Related Posts */}
        <section className="max-w-7xl mx-auto px-6 mt-20 pt-16 border-t border-outline-variant/10">
          <h3 className="text-xs font-mono text-primary mb-10 tracking-[0.3em] uppercase">Podobne Jednostki Danych</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RelatedPostCard 
              category="DEV" 
              date="04.05" 
              title="Struktura danych dla e-commerce w 2024" 
              image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600"
            />
            <RelatedPostCard 
              category="AI" 
              date="28.04" 
              title="Generowanie treści za pomocą LLM i Python" 
              image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600"
            />
            <RelatedPostCard 
              category="SEO" 
              date="15.04" 
              title="Search Console API: Kompletny Przewodnik" 
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
            />
          </div>
        </section>
      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-secondary text-on-secondary rounded-sm shadow-[0_0_20px_rgba(47,248,1,0.3)] flex items-center justify-center z-50 hover:scale-110 active:scale-95 transition-all">
        <Zap size={24} fill="currentColor" />
      </button>
    </div>
  );
}

// --- Shared Components ---

function PostCard({ category, date, title, excerpt, tags, image, onClick }: any) {
  return (
    <article 
      className="group bg-surface-container-low p-5 rounded-sm border border-outline-variant/5 hover:border-primary/20 transition-all flex flex-col h-full cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-video mb-6 overflow-hidden bg-surface-container rounded-sm">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
        />
      </div>
      <div className="flex justify-between items-start mb-4">
        <span className="font-mono text-[9px] px-2 py-1 bg-surface-container-highest text-tertiary rounded-sm">{category}</span>
        <span className="font-mono text-[9px] text-on-surface-variant">{date}</span>
      </div>
      <h4 className="text-xl font-bold font-headline leading-tight mb-4 group-hover:text-primary transition-colors">{title}</h4>
      <p className="text-sm text-on-surface-variant mb-6 line-clamp-3">{excerpt}</p>
      <div className="mt-auto flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span key={tag} className="text-[9px] font-mono text-on-surface-variant hover:text-secondary">{tag}</span>
        ))}
      </div>
    </article>
  );
}

function RelatedPostCard({ category, date, title, image }: any) {
  return (
    <div className="group block bg-surface-container-low p-5 rounded-sm border-b-2 border-transparent hover:border-primary transition-all cursor-pointer">
      <div className="aspect-video mb-4 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-500">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <span className="text-[10px] font-mono text-secondary mb-2 block tracking-widest">{category} // {date}</span>
      <h4 className="font-headline font-bold text-lg leading-tight group-hover:text-primary transition-colors">{title}</h4>
    </div>
  );
}

function TerminalConsole({ filename, code }: { filename: string, code: React.ReactNode }) {
  return (
    <div className="my-10 rounded-sm overflow-hidden bg-surface-container-lowest border border-outline-variant/30 font-mono text-sm shadow-xl">
      <div className="flex items-center justify-between px-4 py-2 bg-surface-container-low border-b border-outline-variant/20">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-error-dim/40"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-outline-variant/40"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-secondary/40"></div>
        </div>
        <span className="text-[10px] text-outline">{filename}</span>
      </div>
      <pre className="p-6 overflow-x-auto text-on-surface-variant leading-relaxed">
        {code}
      </pre>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-12 px-8 border-t border-outline-variant/20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <div className="text-primary font-black font-headline text-xl tracking-tighter">SOWA.BLOG</div>
          <p className="text-on-surface/40 font-mono text-[10px] tracking-widest uppercase">
            © 2024 SOWA.BLOG // SYSTEM_INITIATED
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h5 className="text-secondary font-mono text-xs uppercase tracking-widest">NAVIGATE_INDEX</h5>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <button className="text-on-surface/40 hover:text-primary transition-opacity font-mono text-[10px] uppercase">GitHub</button>
            <button className="text-on-surface/40 hover:text-primary transition-opacity font-mono text-[10px] uppercase">Discord</button>
            <button className="text-on-surface/40 hover:text-primary transition-opacity font-mono text-[10px] uppercase">Newsletter</button>
            <button className="text-on-surface/40 hover:text-primary transition-opacity font-mono text-[10px] uppercase">API_DOCS</button>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 md:items-end">
          <div className="text-right">
            <p className="text-on-surface/60 text-xs font-light mb-2">Build with precision for the next web.</p>
            <div className="flex gap-4 justify-end">
              <Terminal size={18} className="text-on-surface-variant" />
              <Settings size={18} className="text-on-surface-variant" />
              <Search size={18} className="text-on-surface-variant" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
