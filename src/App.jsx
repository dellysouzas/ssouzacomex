import { useState } from 'react'
import './fonts.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-xl border-b border-secondary-200/50 fixed w-full top-0 z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
      <div>
                <h1 className="text-2xl font-bold text-primary-500">Souza Comex</h1>
                <p className="text-sm text-primary-400 font-medium">Comércio Exterior</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-10">
              <a href="#inicio" className="text-primary-500 hover:text-primary-600 transition-all duration-300 font-medium relative group">
                Início
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#sobre" className="text-primary-500 hover:text-primary-600 transition-all duration-300 font-medium relative group">
                Sobre nós
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#servicos" className="text-primary-500 hover:text-primary-600 transition-all duration-300 font-medium relative group">
                Serviços
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#diferenciais" className="text-primary-500 hover:text-primary-600 transition-all duration-300 font-medium relative group">
                Diferenciais
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#depoimentos" className="text-primary-500 hover:text-primary-600 transition-all duration-300 font-medium relative group">
                Depoimentos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contato" className="text-primary-500 hover:text-primary-600 transition-all duration-300 font-medium relative group">
                Contato
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="btn-primary">
                Solicitar Orçamento
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 hover:bg-primary-50 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-secondary-200 bg-white/95 backdrop-blur-md">
              <nav className="flex flex-col space-y-4">
                <a href="#inicio" className="text-primary-500 hover:text-primary-600 transition-colors font-medium py-2">Início</a>
                <a href="#sobre" className="text-primary-500 hover:text-primary-600 transition-colors font-medium py-2">Sobre nós</a>
                <a href="#servicos" className="text-primary-500 hover:text-primary-600 transition-colors font-medium py-2">Serviços</a>
                <a href="#diferenciais" className="text-primary-500 hover:text-primary-600 transition-colors font-medium py-2">Diferenciais</a>
                <a href="#depoimentos" className="text-primary-500 hover:text-primary-600 transition-colors font-medium py-2">Depoimentos</a>
                <a href="#contato" className="text-primary-500 hover:text-primary-600 transition-colors font-medium py-2">Contato</a>
                <button className="btn-primary w-full mt-4">
                  Solicitar Orçamento
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Seção 1: Início */}
        <section id="inicio" className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Conteúdo Texto */}
              <div className="text-left space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-500 leading-tight">
                    Soluções completas para{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">
                      exportação
                    </span>
                  </h1>
                  <h2 className="text-2xl lg:text-3xl font-semibold leading-relaxed">
                    <span className="text-primary-600">Do </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700 font-bold">
                      documento
                    </span>
                    <span className="text-primary-600"> ao </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800 font-bold">
                      destino
                    </span>
                  </h2>
      </div>
                
                <p className="text-lg lg:text-xl text-primary-600 leading-relaxed max-w-2xl">
                  Com mais de <span className="font-bold text-primary-700">20 anos de experiência</span> no mercado, 
                  somos sua parceira confiável para todas as operações de comércio exterior. 
                  Agilidade, follow-up personalizado e maturidade no segmento.
                </p>
                
                                       <div className="flex flex-col sm:flex-row gap-4 pt-6">
                         <button className="group relative overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold text-base px-6 py-3 rounded-xl shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                           <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                           <span className="relative flex items-center gap-2">
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                             </svg>
                             Solicite um orçamento
                           </span>
                         </button>
                         
                         <button className="group relative overflow-hidden bg-white text-primary-600 font-semibold text-base px-6 py-3 rounded-xl shadow-lg border-2 border-primary-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                           <div className="absolute inset-0 bg-primary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                           <span className="relative flex items-center gap-2">
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                             </svg>
                             Conheça nossos serviços
                           </span>
        </button>
                       </div>
              </div>

              {/* Imagem Hero */}
              <div className="relative">
                <div className="relative z-10">
                  <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl shadow-2xl overflow-hidden">
                    {/* Placeholder para imagem real */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 via-primary-500 to-blue-600 flex items-center justify-center">
                      <div className="text-center text-white p-8">
                        <svg className="w-24 h-24 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                        </svg>
                        <p className="text-lg font-medium">Imagem de Exportação</p>
                        <p className="text-sm opacity-80">Porto, navios, containers</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Elementos decorativos */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-300 rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-200 rounded-full opacity-30"></div>
                <div className="absolute top-1/2 -right-8 w-16 h-16 bg-primary-300 rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </section>

                       {/* Seção 2: Sobre nós */}
               <section id="sobre" className="section-padding bg-gradient-to-br from-white via-primary-50 to-secondary-50">
                 <div className="container-custom">
                   {/* Chamada Atraente */}
                   <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-3 bg-primary-100 text-primary-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                       </svg>
                       Mais de 23 anos de experiência
                     </div>
                     <h2 className="text-5xl md:text-7xl font-bold text-primary-500 mb-6">
                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                         Conheça nossa história
                       </span>
                     </h2>
                     <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
                       De uma <span className="font-bold text-primary-700">visão</span> a uma <span className="font-bold text-primary-700">realidade</span> de sucesso no comércio exterior
                     </p>
                   </div>

                   {/* Conteúdo Principal */}
                   <div className="grid lg:grid-cols-2 gap-16 items-center">
                     {/* Texto */}
                     <div className="space-y-8">
                       <div className="space-y-6">
                         <h3 className="text-3xl lg:text-4xl font-bold text-primary-600 leading-tight">
                           Fundada por <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">Silvana Nascimento</span>
                         </h3>
                         <p className="text-lg text-primary-600 leading-relaxed">
                           Profissional que atua no setor de exportação há <span className="font-bold text-primary-700">23 anos</span>. 
                           Tendo como ponto de partida a expertise de Silvana, a experiência da <span className="font-bold text-primary-700">S Souza Comex</span> no comércio exterior é madura, 
                           reconhecida e marcada pela prestação de serviço para grandes players do mercado.
                         </p>
                       </div>

                       {/* Empresas Clientes */}
                       <div className="space-y-4">
                         <h4 className="text-xl font-semibold text-primary-600">Grandes players do mercado:</h4>
                         <div className="flex flex-wrap gap-4">
                           <div className="bg-white px-4 py-2 rounded-lg shadow-md border border-secondary-200">
                             <span className="font-semibold text-primary-600">Tramontina</span>
                           </div>
                           <div className="bg-white px-4 py-2 rounded-lg shadow-md border border-secondary-200">
                             <span className="font-semibold text-primary-600">Huhtamaki</span>
                           </div>
                           <div className="bg-white px-4 py-2 rounded-lg shadow-md border border-secondary-200">
                             <span className="font-semibold text-primary-600">Pamesa</span>
                           </div>
                         </div>
                       </div>

                       <div className="space-y-4">
                         <p className="text-lg text-primary-600 leading-relaxed">
                           A nossa trajetória é de <span className="font-bold text-primary-700">ascensão</span>, com resultados reconhecidos 
                           por pequenas e grandes empresas, processos seguros e desburocratizados.
                         </p>
                         
                                                    <div className="bg-primary-50 p-6 rounded-xl border-l-4 border-primary-500">
                             <h4 className="text-lg font-semibold text-primary-700 mb-2">Nossa especialidade:</h4>
                           <p className="text-primary-600">
                             Somos especialistas no <span className="font-bold">registro de processos</span>, 
                             <span className="font-bold"> desembaraços</span> e <span className="font-bold">coordenação de atividades aduaneiras</span>. 
                             Estamos prontos para te auxiliar nisso!
                           </p>
                         </div>
                       </div>
                     </div>

                     {/* Imagem de Credibilidade */}
                     <div className="relative">
                       <div className="relative z-10">
                         <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl shadow-2xl overflow-hidden">
                           {/* Placeholder para imagem real */}
                           <div className="w-full h-full bg-gradient-to-br from-blue-400 via-primary-500 to-blue-600 flex items-center justify-center">
                             <div className="text-center text-white p-8">
                               <svg className="w-24 h-24 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                               </svg>
                               <p className="text-lg font-medium">Imagem de Credibilidade</p>
                               <p className="text-sm opacity-80">Profissionalismo e confiança</p>
                             </div>
                           </div>
                         </div>
                       </div>
                       
                       {/* Elementos decorativos */}
                       <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary-300 rounded-full opacity-20"></div>
                       <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-primary-200 rounded-full opacity-30"></div>
                       <div className="absolute top-1/2 -right-8 w-16 h-16 bg-primary-300 rounded-full opacity-40"></div>
                     </div>
                   </div>
                 </div>
               </section>

                       {/* Seção 3: Serviços */}
               <section id="servicos" className="section-padding bg-gradient-to-br from-secondary-50 via-white to-primary-50">
                 <div className="container-custom">
                   {/* Header da Seção */}
                   <div className="text-center mb-16">
                     <div className="inline-flex items-center gap-3 bg-primary-100 text-primary-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                       </svg>
                       Soluções completas
                     </div>
                     <h2 className="text-5xl md:text-7xl font-bold text-primary-500 mb-6">
                       <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                         Transforme sua exportação
                       </span>
                     </h2>
                     <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
                       <span className="font-bold text-primary-700">9 serviços especializados</span> para todas as suas necessidades de comércio exterior
                     </p>
                   </div>

                   {/* Grid de Serviços */}
                   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {/* Serviço 1: Desembaraço Aduaneiro com emissão de DUE */}
                     <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
                       <div className="p-8">
                         <div className="flex items-start gap-4 mb-6">
                           <div className="service-icon-container">
                             <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                             </svg>
                           </div>
                           <div className="flex-1 min-w-0">
                             <h3 className="text-xl font-bold text-primary-600 leading-tight">Desembaraço Aduaneiro com emissão de DUE</h3>
                           </div>
                         </div>
                         <p className="text-gray-600 text-base leading-relaxed mb-6">
                           Preparação e registro da Declaração Única de Exportação, garantindo que toda a documentação esteja correta e o processo ocorra sem atrasos.
                         </p>
                         <button 
                           onClick={() => document.getElementById('servico1-details').classList.toggle('hidden')}
                           className="group/btn btn-modern"
                         >
                           <span>Ver quando contratar</span>
                           <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                           </svg>
                         </button>
                       </div>
                       <div id="servico1-details" className="hidden bg-gradient-to-r from-primary-50 to-secondary-50 p-8 border-t border-primary-200">
                         <h4 className="font-bold text-primary-700 mb-3 text-lg">Quando contratar?</h4>
                         <p className="text-primary-600 text-base leading-relaxed">
                           Indicado para empresas que realizam exportações regulares e precisam atender às exigências do Portal Único de Comércio Exterior.
                         </p>
                       </div>
                     </div>

                     {/* Serviço 2: Desembaraço Aduaneiro sem emissão de DUE */}
                     <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
                       <div className="p-8">
                         <div className="flex items-start gap-4 mb-6">
                           <div className="service-icon-container">
                             <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                             </svg>
                           </div>
                           <div className="flex-1 min-w-0">
                             <h3 className="text-xl font-bold text-primary-600 leading-tight">Desembaraço Aduaneiro sem emissão de DUE</h3>
                           </div>
                         </div>
                         <p className="text-gray-600 text-base leading-relaxed mb-6">
                           Atendimento ágil para operações em que a emissão da Declaração Única de Exportação é feita pelo próprio cliente, garantindo que o restante do processo ocorra de forma rápida e em conformidade com as normas.
                         </p>
                         <button 
                           onClick={() => document.getElementById('servico2-details').classList.toggle('hidden')}
                           className="group/btn btn-modern"
                         >
                           <span>Ver quando contratar</span>
                           <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                           </svg>
                         </button>
                       </div>
                       <div id="servico2-details" className="hidden bg-gradient-to-r from-primary-50 to-secondary-50 p-8 border-t border-primary-200">
                         <h4 className="font-bold text-primary-700 mb-3 text-lg">Quando contratar?</h4>
                         <p className="text-primary-600 text-base leading-relaxed">
                           Indicado para empresas que já possuem equipe interna ou parceiro para emitir a DUE, mas precisam de suporte especializado no desembaraço aduaneiro.
                         </p>
                       </div>
                     </div>

                     {/* Serviço 3: Exportação Temporária */}
                     <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
                       <div className="p-8">
                         <div className="flex items-start gap-4 mb-6">
                           <div className="service-icon-container">
                             <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                             </svg>
                           </div>
                           <div className="flex-1 min-w-0">
                             <h3 className="text-xl font-bold text-primary-600 leading-tight">Exportação Temporária</h3>
                           </div>
                         </div>
                         <p className="text-gray-600 text-base leading-relaxed mb-6">
                           Planejamento e execução de exportações por tempo determinado, assegurando a correta documentação para posterior retorno da mercadoria.
                         </p>
                         <button 
                           onClick={() => document.getElementById('servico3-details').classList.toggle('hidden')}
                           className="group/btn btn-modern"
                         >
                           <span>Ver quando contratar</span>
                           <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                           </svg>
                         </button>
                       </div>
                       <div id="servico3-details" className="hidden bg-gradient-to-r from-primary-50 to-secondary-50 p-8 border-t border-primary-200">
                         <h4 className="font-bold text-primary-700 mb-3 text-lg">Quando contratar?</h4>
                         <p className="text-primary-600 text-base leading-relaxed">
                           Indicado para empresas que enviam produtos para feiras, exposições, testes ou consertos no exterior e precisam que retornem ao país sem incidência de tributos de importação.
                         </p>
                       </div>
                     </div>

                     {/* Serviço 4: Handling */}
                     <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
                       <div className="p-8">
                         <div className="flex items-start gap-4 mb-6">
                           <div className="service-icon-container">
                             <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                             </svg>
                           </div>
                           <div className="flex-1 min-w-0">
                             <h3 className="text-xl font-bold text-primary-600 leading-tight">Handling</h3>
                           </div>
                         </div>
                         <p className="text-gray-600 text-base leading-relaxed mb-6">
                           Coordenação e acompanhamento de carga em portos e aeroportos, garantindo manuseio seguro e cumprimento dos prazos de embarque e desembarque.
                         </p>
                         <button 
                           onClick={() => document.getElementById('servico4-details').classList.toggle('hidden')}
                           className="group/btn btn-modern"
                         >
                           <span>Ver quando contratar</span>
                           <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                           </svg>
                         </button>
                       </div>
                       <div id="servico4-details" className="hidden bg-gradient-to-r from-primary-50 to-secondary-50 p-8 border-t border-primary-200">
                         <h4 className="font-bold text-primary-700 mb-3 text-lg">Quando contratar?</h4>
                         <p className="text-primary-600 text-base leading-relaxed">
                           Indicado para empresas que necessitam de suporte operacional local para embarques e desembarques, especialmente quando não possuem equipe própria no terminal.
                         </p>
                       </div>
                     </div>

                     {/* Serviço 5: Frete Aéreo Internacional */}
                     <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
                       <div className="p-8">
                         <div className="flex items-start gap-4 mb-6">
                           <div className="service-icon-container">
                             <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                             </svg>
                           </div>
                           <div className="flex-1 min-w-0">
                             <h3 className="text-xl font-bold text-primary-600 leading-tight">Frete Aéreo Internacional</h3>
                           </div>
                         </div>
                         <p className="text-gray-600 text-base leading-relaxed mb-6">
                           Cotação, contratação e acompanhamento de embarques aéreos para garantir agilidade e segurança no transporte.
                         </p>
                         <button 
                           onClick={() => document.getElementById('servico5-details').classList.toggle('hidden')}
                           className="group/btn btn-modern"
                         >
                           <span>Ver quando contratar</span>
                           <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                           </svg>
                         </button>
                       </div>
                       <div id="servico5-details" className="hidden bg-gradient-to-r from-primary-50 to-secondary-50 p-8 border-t border-primary-200">
                         <h4 className="font-bold text-primary-700 mb-3 text-lg">Quando contratar?</h4>
                         <p className="text-primary-600 text-base leading-relaxed">
                           Indicado para empresas que precisam enviar mercadorias de forma rápida, urgente ou com alto valor agregado.
                         </p>
                       </div>
                     </div>

                     {/* Serviço 6: Frete Rodoviário Internacional */}
                     <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
                       <div className="p-8">
                         <div className="flex items-start gap-4 mb-6">
                           <div className="service-icon-container">
                             <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                             </svg>
                           </div>
                           <div className="flex-1 min-w-0">
                             <h3 className="text-xl font-bold text-primary-600 leading-tight">Frete Rodoviário Internacional</h3>
                           </div>
                         </div>
                         <p className="text-gray-600 text-base leading-relaxed mb-6">
                           Organização do transporte terrestre entre países, assegurando logística integrada e rastreamento.
                         </p>
                         <button 
                           onClick={() => document.getElementById('servico6-details').classList.toggle('hidden')}
                           className="group/btn btn-modern"
                         >
                           <span>Ver quando contratar</span>
                           <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                           </svg>
                         </button>
                       </div>
                       <div id="servico6-details" className="hidden bg-gradient-to-r from-primary-50 to-secondary-50 p-8 border-t border-primary-200">
                         <h4 className="font-bold text-primary-700 mb-3 text-lg">Quando contratar?</h4>
                         <p className="text-primary-600 text-base leading-relaxed">
                           Indicado para empresas que exportam ou importam para países vizinhos via transporte terrestre, como Argentina, Paraguai, Chile e outros da América do Sul.
                         </p>
                       </div>
                     </div>

                     {/* Serviço 7: Frete Marítimo Internacional */}
                     <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
                       <div className="p-8">
                         <div className="flex items-start gap-4 mb-6">
                           <div className="service-icon-container">
                             <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                             </svg>
                           </div>
                           <div className="flex-1 min-w-0">
                             <h3 className="text-xl font-bold text-primary-600 leading-tight">Frete Marítimo Internacional</h3>
                           </div>
                         </div>
                         <p className="text-gray-600 text-base leading-relaxed mb-6">
                           Coordenação de envios marítimos com parceiros de confiança, buscando o melhor custo-benefício.
                         </p>
                         <button 
                           onClick={() => document.getElementById('servico7-details').classList.toggle('hidden')}
                           className="group/btn btn-modern"
                         >
                           <span>Ver quando contratar</span>
                           <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                           </svg>
                         </button>
                       </div>
                       <div id="servico7-details" className="hidden bg-gradient-to-r from-primary-50 to-secondary-50 p-8 border-t border-primary-200">
                         <h4 className="font-bold text-primary-700 mb-3 text-lg">Quando contratar?</h4>
                         <p className="text-primary-600 text-base leading-relaxed">
                           Indicado para empresas que enviam grandes volumes ou cargas de alto peso, buscando otimizar custos logísticos.
                         </p>
                       </div>
                     </div>

                     {/* Serviço 8: Drawback */}
                     <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
                       <div className="p-8">
                         <div className="flex items-start gap-4 mb-6">
                           <div className="service-icon-container">
                             <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                             </svg>
                           </div>
                           <div className="flex-1 min-w-0">
                             <h3 className="text-xl font-bold text-primary-600 leading-tight">Drawback</h3>
                           </div>
                         </div>
                         <p className="text-gray-600 text-base leading-relaxed mb-6">
                           Assessoria na obtenção e gestão do regime especial que reduz ou isenta tributos para insumos importados destinados à exportação.
                         </p>
                         <button 
                           onClick={() => document.getElementById('servico8-details').classList.toggle('hidden')}
                           className="group/btn btn-modern"
                         >
                           <span>Ver quando contratar</span>
                           <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                           </svg>
                         </button>
                       </div>
                       <div id="servico8-details" className="hidden bg-gradient-to-r from-primary-50 to-secondary-50 p-8 border-t border-primary-200">
                         <h4 className="font-bold text-primary-700 mb-3 text-lg">Quando contratar?</h4>
                         <p className="text-primary-600 text-base leading-relaxed">
                           Indicado para empresas industriais ou comerciais que importam insumos para produzir mercadorias destinadas à exportação, visando redução de custos tributários.
                         </p>
                       </div>
                     </div>

                     {/* Serviço 9: Admissão Temporária */}
                     <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
                       <div className="p-8">
                         <div className="flex items-start gap-4 mb-6">
                           <div className="service-icon-container">
                             <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                             </svg>
                           </div>
                           <div className="flex-1 min-w-0">
                             <h3 className="text-xl font-bold text-primary-600 leading-tight">Admissão Temporária</h3>
                           </div>
                         </div>
                         <p className="text-gray-600 text-base leading-relaxed mb-6">
                           Processos de entrada de mercadorias no país com suspensão de tributos para uso específico e por prazo determinado.
                         </p>
                         <button 
                           onClick={() => document.getElementById('servico9-details').classList.toggle('hidden')}
                           className="group/btn btn-modern"
                         >
                           <span>Ver quando contratar</span>
                           <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                           </svg>
                         </button>
                       </div>
                       <div id="servico9-details" className="hidden bg-gradient-to-r from-primary-50 to-secondary-50 p-8 border-t border-primary-200">
                         <h4 className="font-bold text-primary-700 mb-3 text-lg">Quando contratar?</h4>
                         <p className="text-primary-600 text-base leading-relaxed">
                           Indicado para empresas que trazem equipamentos, máquinas ou produtos para eventos, feiras, testes, exposições ou obras temporárias no Brasil.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </section>

        {/* Seção 4: Diferenciais */}
        <section id="diferenciais" className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-5xl md:text-7xl font-bold text-primary-500 mb-8">
                Diferenciais
              </h2>
              <p className="text-xl text-primary-600 max-w-3xl mx-auto">
                Conteúdo da seção Diferenciais será adicionado aqui
              </p>
            </div>
          </div>
        </section>

        {/* Seção 5: Depoimentos */}
        <section id="depoimentos" className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-5xl md:text-7xl font-bold text-primary-500 mb-8">
                Depoimentos
              </h2>
              <p className="text-xl text-primary-600 max-w-3xl mx-auto">
                Conteúdo da seção Depoimentos será adicionado aqui
              </p>
            </div>
          </div>
        </section>

        {/* Seção 6: Contato */}
        <section id="contato" className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-5xl md:text-7xl font-bold text-primary-500 mb-8">
                Contato
              </h2>
              <p className="text-xl text-primary-600 max-w-3xl mx-auto">
                Conteúdo da seção Contato será adicionado aqui
        </p>
      </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-500 text-white py-12">
        <div className="container-custom">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Souza Comex</h3>
            <p className="text-primary-100 max-w-2xl mx-auto">
              Conteúdo do footer será adicionado aqui
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
