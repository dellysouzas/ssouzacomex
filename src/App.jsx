import { useState } from 'react'
import './fonts.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Estado do formulário wizard
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 5
  
  // Lista de serviços disponíveis
  const services = [
    { id: 'desembaraço-com-due', name: 'Desembaraço Aduaneiro com emissão de DUE' },
    { id: 'desembaraço-sem-due', name: 'Desembaraço Aduaneiro sem emissão de DUE' },
    { id: 'exportacao-temporaria', name: 'Exportação Temporária' },
    { id: 'handling', name: 'Handling' },
    { id: 'frete-aereo', name: 'Frete Aéreo Internacional' },
    { id: 'frete-rodoviario', name: 'Frete Rodoviário Internacional' },
    { id: 'frete-maritimo', name: 'Frete Marítimo Internacional' },
    { id: 'drawback', name: 'Drawback' },
    { id: 'admissao-temporaria', name: 'Admissão Temporária' }
  ]
  
  // Estado do formulário
  const [formData, setFormData] = useState({
    companyName: '',
    cnpj: '',
    contactName: '',
    email: '',
    phone: '',
    city: '',
    selectedServices: [],
    additionalServices: '',
    operationType: '',
    frequency: '',
    products: '',
    destinations: '',
    challenges: '',
    budget: '',
    timeline: '',
    source: '',
    observations: ''
  })
  
  // Função para verificar se pode prosseguir
  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.companyName && formData.cnpj && formData.contactName && formData.email && formData.phone && formData.city
      case 2:
        return formData.selectedServices.length > 0
      case 3:
        return formData.operationType && formData.frequency && formData.products && formData.destinations
      case 4:
        return formData.budget && formData.timeline
      case 5:
        return true
      default:
        return false
    }
  }
  
  // Função para enviar o formulário
  const handleSubmit = () => {
    // Aqui você pode implementar a lógica para enviar os dados
    console.log('Dados do formulário:', formData)
    alert('Solicitação enviada com sucesso! Em até 24 horas entraremos em contato.')
    
    // Reset do formulário
    setFormData({
      companyName: '',
      cnpj: '',
      contactName: '',
      email: '',
      phone: '',
      city: '',
      selectedServices: [],
      additionalServices: '',
      operationType: '',
      frequency: '',
      products: '',
      destinations: '',
      challenges: '',
      budget: '',
      timeline: '',
      source: '',
      observations: ''
    })
    setCurrentStep(1)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-xl border-b border-secondary-200/50 fixed w-full top-0 z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-40 h-40 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/Souza Comex Logo 1.png" 
                  alt="Souza Comex - Despacho Aduaneiro" 
                  className="w-full h-full object-contain"
                />
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
                    <span className="custom-blue font-bold">
                      destino
                    </span>
                  </h2>
      </div>
                
                <p className="text-lg lg:text-xl text-primary-600 leading-relaxed max-w-2xl">
                  Com mais de <span className="font-bold text-primary-700">20 anos de experiência</span> no mercado, 
                  somos sua parceira confiável para todas as operações de comércio exterior. 
                  Agilidade, follow-up personalizado e maturidade no segmento.
                </p>
                
                                       {/* CTAs - Desktop */}
                                       <div className="hidden md:flex flex-col sm:flex-row gap-4 pt-6">
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
                           <div className="absolute inset-0 custom-blue-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                           <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                             </svg>
                             Conheça nossos serviços
                           </span>
                         </button>
                       </div>

                       {/* CTAs - Mobile */}
                       <div className="md:hidden pt-8">
                         {/* CTA Principal - Orçamento */}
                         <div className="mobile-cta-card bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 rounded-2xl p-6 shadow-2xl mb-4 transform hover:scale-[1.02] transition-all duration-300 active:scale-95">
                           <div className="flex items-center justify-between mb-3">
                             <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                               </svg>
                             </div>
                             <div className="text-right">
                               <div className="text-xs text-primary-100 font-medium">RESPOSTA EM 24H</div>
                               <div className="text-xs text-primary-200">Gratuito</div>
                             </div>
                           </div>
                           <h3 className="text-xl font-bold text-white mb-2">Solicite um orçamento</h3>
                           <p className="text-primary-100 text-sm mb-4 leading-relaxed">
                             Receba uma proposta personalizada para suas necessidades de comércio exterior
                           </p>
                           <button className="mobile-cta-button w-full bg-white text-primary-600 font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
                             <span className="flex items-center justify-center gap-2">
                               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                               </svg>
                               Solicitar agora
                             </span>
                           </button>
                         </div>

                         {/* CTA Secundário - Serviços */}
                         <div className="mobile-cta-card bg-white border-2 border-primary-200 rounded-2xl p-6 shadow-xl transform hover:scale-[1.02] transition-all duration-300 active:scale-95">
                           <div className="flex items-center justify-between mb-3">
                             <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                               </svg>
                             </div>
                             <div className="text-right">
                               <div className="text-xs text-primary-600 font-medium">9 SERVIÇOS</div>
                               <div className="text-xs text-gray-500">Especializados</div>
                             </div>
                           </div>
                           <h3 className="text-xl font-bold text-primary-600 mb-2">Conheça nossos serviços</h3>
                           <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                             Descubra todas as soluções que oferecemos para seu comércio exterior
                           </p>
                           <button className="mobile-cta-button w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
                             <span className="flex items-center justify-center gap-2">
                               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                               </svg>
                               Ver serviços
                             </span>
                           </button>
                         </div>
                       </div>
              </div>

              {/* Vídeo Hero */}
              <div className="relative">
                <div className="relative z-10">
                  <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl shadow-2xl overflow-hidden">
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                    >
                      <source src="/video-souza.mp4" type="video/mp4" />
                      Seu navegador não suporta vídeos.
                    </video>
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
                           <span>Quando contratar?</span>
                           <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                           </svg>
                         </button>
                       </div>
                       <div id="servico1-details" className="hidden bg-gradient-to-r from-primary-50 to-secondary-50 p-8 border-t border-primary-200">
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
                           <span>Quando contratar?</span>
                           <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                           </svg>
                         </button>
                       </div>
                       <div id="servico2-details" className="hidden bg-gradient-to-r from-primary-50 to-secondary-50 p-8 border-t border-primary-200">
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
                           <span>Quando contratar?</span>
                           <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                           </svg>
                         </button>
                       </div>
                       <div id="servico3-details" className="hidden bg-gradient-to-r from-primary-50 to-secondary-50 p-8 border-t border-primary-200">
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
                           <span>Quando contratar?</span>
                           <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                           </svg>
                         </button>
                       </div>
                       <div id="servico4-details" className="hidden bg-gradient-to-r from-primary-50 to-secondary-50 p-8 border-t border-primary-200">
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
                           <span>Quando contratar?</span>
                           <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                           </svg>
                         </button>
                       </div>
                       <div id="servico5-details" className="hidden bg-gradient-to-r from-primary-50 to-secondary-50 p-8 border-t border-primary-200">
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
                           <span>Quando contratar?</span>
                           <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                           </svg>
                         </button>
                       </div>
                       <div id="servico6-details" className="hidden bg-gradient-to-r from-primary-50 to-secondary-50 p-8 border-t border-primary-200">
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
                           <span>Quando contratar?</span>
                           <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                           </svg>
                         </button>
                       </div>
                       <div id="servico7-details" className="hidden bg-gradient-to-r from-primary-50 to-secondary-50 p-8 border-t border-primary-200">
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
                           <span>Quando contratar?</span>
                           <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                           </svg>
                         </button>
                       </div>
                       <div id="servico8-details" className="hidden bg-gradient-to-r from-primary-50 to-secondary-50 p-8 border-t border-primary-200">
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
                           <span>Quando contratar?</span>
                           <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                           </svg>
                         </button>
                       </div>
                       <div id="servico9-details" className="hidden bg-gradient-to-r from-primary-50 to-secondary-50 p-8 border-t border-primary-200">
                         <p className="text-primary-600 text-base leading-relaxed">
                           Indicado para empresas que trazem equipamentos, máquinas ou produtos para eventos, feiras, testes, exposições ou obras temporárias no Brasil.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </section>

        {/* Seção 4: Diferenciais */}
        <section id="diferenciais" className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold text-primary-500 mb-6">
                Porque nos escolher?
              </h2>
              <p className="text-xl text-primary-600 max-w-4xl mx-auto leading-relaxed">
                Nossa <span className="custom-blue font-semibold">expertise</span> e compromisso fazem a diferença em cada operação de comércio exterior
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Diferencial 1: Atendimento Personalizado */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-600 mb-4 text-center">
                  Atendimento Personalizado
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Atendimento direto e personalizado com uma profissional experiente, sem intermediários.
                </p>
              </div>

              {/* Diferencial 2: Agilidade */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:custom-blue-shadow">
                <div className="w-16 h-16 custom-blue-bg rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold custom-blue mb-4 text-center">
                  Agilidade nos Prazos
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Compromisso com prazos e rapidez na execução de todas as operações.
                </p>
              </div>

              {/* Diferencial 3: Experiência */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary-600 mb-4 text-center">
                  Experiência de Mercado
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Conhecimento prático e experiência com diferentes mercados internacionais.
                </p>
              </div>

              {/* Diferencial 4: Facilidade */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:custom-blue-shadow">
                <div className="w-16 h-16 custom-blue-bg rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold custom-blue mb-4 text-center">
                  Processo Simplificado
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Facilidade no processo burocrático, tornando o comércio exterior mais acessível.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 5: Depoimentos */}
        <section id="depoimentos" className="section-padding bg-gradient-to-br from-secondary-50 via-white to-primary-50">
          <div className="container-custom">
            {/* Chamada Atraente */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-primary-100 text-primary-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                Histórias de sucesso
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-primary-500 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                  O que nossos clientes dizem
                </span>
              </h2>
              <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
                <span className="font-bold text-primary-700">Confiança</span> e <span className="font-bold text-primary-700">resultados</span> que falam por si mesmos
              </p>
            </div>

            {/* Grid de Depoimentos */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Depoimento 1 */}
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
                <div className="p-8">
                  {/* Avaliação com estrelas */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  
                  {/* Texto do depoimento */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "A Souza Comex transformou completamente nossa experiência de exportação. A agilidade e profissionalismo da equipe nos permitiu expandir para novos mercados com total confiança. O follow-up personalizado faz toda a diferença!"
                  </blockquote>
                  
                  {/* Informações do cliente */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">M</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-600">Marcelo Silva</h4>
                      <p className="text-sm text-gray-500">Diretor Comercial</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Depoimento 2 */}
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
                <div className="p-8">
                  {/* Avaliação com estrelas */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  
                  {/* Texto do depoimento */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "Após 15 anos no mercado, posso dizer que a Souza Comex é uma das empresas mais competentes que já trabalhei. A experiência da Silvana e a maturidade no segmento são evidentes em cada operação. Recomendo sem hesitar!"
                  </blockquote>
                  
                  {/* Informações do cliente */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">A</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-600">Ana Costa</h4>
                      <p className="text-sm text-gray-500">Gerente de Logística</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Depoimento 3 */}
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2">
                <div className="p-8">
                  {/* Avaliação com estrelas */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  
                  {/* Texto do depoimento */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "Como empresa que começou pequena, precisávamos de um parceiro que entendesse nossas necessidades. A Souza Comex não só entendeu, como superou todas as expectativas. Processos desburocratizados e resultados excepcionais!"
                  </blockquote>
                  
                  {/* Informações do cliente */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">R</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-600">Roberto Mendes</h4>
                      <p className="text-sm text-gray-500">CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA após depoimentos */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Faça parte da nossa história de sucesso
                </h3>
                <p className="text-primary-100 text-lg mb-6 max-w-2xl mx-auto">
                  Junte-se aos clientes que já transformaram suas operações de comércio exterior com a Souza Comex
                </p>
                <button className="group relative overflow-hidden bg-white text-primary-600 font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-white/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                  <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Solicitar Orçamento
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 6: Contato */}
        <section id="contato" className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
          <div className="container-custom">
            {/* Chamada Atraente */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-primary-100 text-primary-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Orçamento personalizado
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-primary-500 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                  Acelere seu crescimento global
                </span>
              </h2>
              <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
                <span className="font-bold text-primary-700">Solicite um orçamento personalizado</span> e descubra como podemos 
                otimizar suas operações de comércio exterior
              </p>
            </div>

            {/* Formulário Wizard */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Header do Formulário */}
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-8 text-white text-center">
                  <h3 className="text-3xl font-bold mb-4">Vamos nos conhecer</h3>
                  <p className="text-primary-100 text-lg">
                    Preencha as informações abaixo para receber um orçamento personalizado
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="bg-gray-100 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Progresso</span>
                    <span className="text-sm font-medium text-primary-600">{Math.round((currentStep / totalSteps) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Formulário Wizard */}
                <div className="p-8">
                  {/* Etapa 1: Informações Básicas */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-primary-600">1</span>
                        </div>
                        <h4 className="text-2xl font-bold text-primary-600 mb-2">Informações Básicas</h4>
                        <p className="text-gray-600">Comece nos contando sobre sua empresa</p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nome da Empresa *
                          </label>
                          <input
                            type="text"
                            value={formData.companyName}
                            onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                            placeholder="Digite o nome da sua empresa"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CNPJ *
                          </label>
                          <input
                            type="text"
                            value={formData.cnpj}
                            onChange={(e) => setFormData({...formData, cnpj: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                            placeholder="00.000.000/0000-00"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nome do Responsável *
                          </label>
                          <input
                            type="text"
                            value={formData.contactName}
                            onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                            placeholder="Seu nome completo"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                            placeholder="seu@email.com"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Telefone *
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                            placeholder="(11) 99999-9999"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Cidade/Estado *
                          </label>
                          <input
                            type="text"
                            value={formData.city}
                            onChange={(e) => setFormData({...formData, city: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                            placeholder="São Paulo, SP"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Etapa 2: Serviços Desejados */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-primary-600">2</span>
                        </div>
                        <h4 className="text-2xl font-bold text-primary-600 mb-2">Serviços Desejados</h4>
                        <p className="text-gray-600">Selecione quais serviços você gostaria de contratar</p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        {services.map((service, index) => (
                          <label key={index} className="flex items-center p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-primary-300 transition-all duration-300">
                            <input
                              type="checkbox"
                              checked={formData.selectedServices.includes(service.id)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setFormData({
                                    ...formData, 
                                    selectedServices: [...formData.selectedServices, service.id]
                                  });
                                } else {
                                  setFormData({
                                    ...formData, 
                                    selectedServices: formData.selectedServices.filter(id => id !== service.id)
                                  });
                                }
                              }}
                              className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                            />
                            <span className="ml-3 text-gray-700 font-medium">{service.name}</span>
                          </label>
                        ))}
                      </div>
                      
                      <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Outros serviços ou necessidades específicas
                        </label>
                        <textarea
                          value={formData.additionalServices}
                          onChange={(e) => setFormData({...formData, additionalServices: e.target.value})}
                          rows="3"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="Descreva outros serviços ou necessidades específicas..."
                        />
                      </div>
                    </div>
                  )}

                  {/* Etapa 3: Detalhes da Operação */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-primary-600">3</span>
                        </div>
                        <h4 className="text-2xl font-bold text-primary-600 mb-2">Detalhes da Operação</h4>
                        <p className="text-gray-600">Nos conte mais sobre suas necessidades</p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tipo de Operação *
                          </label>
                          <select
                            value={formData.operationType}
                            onChange={(e) => setFormData({...formData, operationType: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          >
                            <option value="">Selecione uma opção</option>
                            <option value="exportacao">Exportação</option>
                            <option value="importacao">Importação</option>
                            <option value="ambos">Ambos</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Frequência de Operações *
                          </label>
                          <select
                            value={formData.frequency}
                            onChange={(e) => setFormData({...formData, frequency: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          >
                            <option value="">Selecione uma opção</option>
                            <option value="primeira-vez">Primeira vez</option>
                            <option value="ocasional">Ocasional (2-3x por ano)</option>
                            <option value="regular">Regular (mensal)</option>
                            <option value="intensivo">Intensivo (semanal)</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Principais Produtos *
                          </label>
                          <input
                            type="text"
                            value={formData.products}
                            onChange={(e) => setFormData({...formData, products: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                            placeholder="Ex: Máquinas, eletrônicos, têxteis..."
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Principais Destinos/Origem *
                          </label>
                          <input
                            type="text"
                            value={formData.destinations}
                            onChange={(e) => setFormData({...formData, destinations: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                            placeholder="Ex: EUA, Europa, Ásia..."
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Descreva sua operação atual e desafios
                        </label>
                        <textarea
                          value={formData.challenges}
                          onChange={(e) => setFormData({...formData, challenges: e.target.value})}
                          rows="4"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="Conte-nos sobre sua operação atual, desafios enfrentados e como podemos ajudar..."
                        />
                      </div>
                    </div>
                  )}

                  {/* Etapa 4: Orçamento e Prazo */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-primary-600">4</span>
                        </div>
                        <h4 className="text-2xl font-bold text-primary-600 mb-2">Orçamento e Prazo</h4>
                        <p className="text-gray-600">Últimas informações para personalizar sua proposta</p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Orçamento Mensal Estimado *
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({...formData, budget: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          >
                            <option value="">Selecione uma opção</option>
                            <option value="ate-10k">Até R$ 10.000</option>
                            <option value="10k-50k">R$ 10.000 - R$ 50.000</option>
                            <option value="50k-100k">R$ 50.000 - R$ 100.000</option>
                            <option value="100k-500k">R$ 100.000 - R$ 500.000</option>
                            <option value="acima-500k">Acima de R$ 500.000</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Prazo para Início *
                          </label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          >
                            <option value="">Selecione uma opção</option>
                            <option value="imediato">Imediato</option>
                            <option value="1-mes">1 mês</option>
                            <option value="3-meses">3 meses</option>
                            <option value="6-meses">6 meses</option>
                            <option value="sem-pressa">Sem pressa</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Como conheceu a Souza Comex?
                        </label>
                        <select
                          value={formData.source}
                          onChange={(e) => setFormData({...formData, source: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">Selecione uma opção</option>
                          <option value="google">Google</option>
                          <option value="linkedin">LinkedIn</option>
                          <option value="indicacao">Indicação</option>
                          <option value="redes-sociais">Redes Sociais</option>
                          <option value="outro">Outro</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Observações adicionais
                        </label>
                        <textarea
                          value={formData.observations}
                          onChange={(e) => setFormData({...formData, observations: e.target.value})}
                          rows="3"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                          placeholder="Alguma informação adicional que gostaria de compartilhar..."
                        />
                      </div>
                    </div>
                  )}

                  {/* Etapa 5: Confirmação */}
                  {currentStep === 5 && (
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-bold text-green-600 mb-2">Confirme suas Informações</h4>
                        <p className="text-gray-600">Revise os dados antes de enviar</p>
                      </div>
                      
                      <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-gray-700 mb-2">Empresa</h5>
                            <p className="text-gray-600">{formData.companyName}</p>
                            <p className="text-gray-600">{formData.cnpj}</p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-700 mb-2">Contato</h5>
                            <p className="text-gray-600">{formData.contactName}</p>
                            <p className="text-gray-600">{formData.email}</p>
                            <p className="text-gray-600">{formData.phone}</p>
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-gray-700 mb-2">Serviços Selecionados</h5>
                          <div className="flex flex-wrap gap-2">
                            {formData.selectedServices.map(serviceId => {
                              const service = services.find(s => s.id === serviceId);
                              return service ? (
                                <span key={serviceId} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                                  {service.name}
                                </span>
                              ) : null;
                            })}
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-gray-700 mb-2">Operação</h5>
                          <p className="text-gray-600">Tipo: {formData.operationType}</p>
                          <p className="text-gray-600">Frequência: {formData.frequency}</p>
                          <p className="text-gray-600">Produtos: {formData.products}</p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div>
                            <h5 className="font-semibold text-blue-800 mb-1">O que acontece depois?</h5>
                            <p className="text-blue-700 text-sm">
                              Em até 24 horas, nossa equipe entrará em contato para agendar uma reunião personalizada 
                              e apresentar sua proposta comercial sob medida.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navegação do Wizard */}
                  <div className="flex justify-between items-center pt-8 border-t border-gray-200">
                    {currentStep > 1 && (
                      <button
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-primary-600 transition-colors duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Voltar
                      </button>
                    )}
                    
                    <div className="ml-auto">
                      {currentStep < totalSteps ? (
                        <button
                          onClick={() => setCurrentStep(currentStep + 1)}
                          disabled={!canProceed()}
                          className="group relative overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-primary-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <span className="relative flex items-center gap-3">
                            Continuar
                            <svg className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </button>
                      ) : (
                        <button
                          onClick={handleSubmit}
                          disabled={!canProceed()}
                          className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <span className="relative flex items-center gap-3">
                            Enviar Informações
                            <svg className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
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
