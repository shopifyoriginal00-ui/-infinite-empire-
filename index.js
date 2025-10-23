module.exports = (req, res) => {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>INFINITE COMPOUND EMPIRE™ | Trillionaire Wealth System | ∞×∞×∞ Growth Protocol</title>
  
  <!-- Premium Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- AdSense -->
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossorigin="anonymous"></script>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    :root {
      --infinity-gold: #FFD700;
      --quantum-blue: #00F0FF;
      --plasma-purple: #B026FF;
      --void: #000000;
      --stars: #FFFFFF;
    }
    
    body {
      font-family: 'Space Grotesk', system-ui, sans-serif;
      background: var(--void);
      color: var(--stars);
      overflow-x: hidden;
      position: relative;
    }
    
    /* Infinite Space Background */
    .space-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      background: 
        radial-gradient(2px 2px at 20% 30%, white, transparent),
        radial-gradient(2px 2px at 60% 70%, white, transparent),
        radial-gradient(1px 1px at 50% 50%, white, transparent),
        radial-gradient(1px 1px at 80% 10%, white, transparent),
        radial-gradient(2px 2px at 90% 60%, white, transparent),
        radial-gradient(1px 1px at 33% 80%, white, transparent),
        radial-gradient(2px 2px at 10% 90%, white, transparent);
      background-size: 200% 200%;
      animation: stars 100s linear infinite;
    }
    
    @keyframes stars {
      0% { background-position: 0% 0%; }
      100% { background-position: 100% 100%; }
    }
    
    /* Infinite Money Rain */
    .money-rain {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
      overflow: hidden;
    }
    
    .money-symbol {
      position: absolute;
      font-size: 30px;
      color: var(--infinity-gold);
      opacity: 0.6;
      animation: fall linear infinite;
    }
    
    @keyframes fall {
      0% { transform: translateY(-100px) rotate(0deg); }
      100% { transform: translateY(100vh) rotate(360deg); }
    }
    
    .container {
      position: relative;
      z-index: 2;
      max-width: 1800px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    /* Holographic Header */
    .infinity-header {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .infinity-badge {
      position: absolute;
      top: 40px;
      right: 40px;
      padding: 15px 35px;
      background: linear-gradient(135deg, var(--infinity-gold), var(--quantum-blue), var(--plasma-purple));
      background-size: 200% 200%;
      animation: gradientFlow 3s ease infinite;
      border-radius: 50px;
      font-family: 'Orbitron', monospace;
      font-weight: 700;
      letter-spacing: 3px;
      font-size: 12px;
      box-shadow: 0 0 50px rgba(255, 215, 0, 0.5);
    }
    
    @keyframes gradientFlow {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    .mega-title {
      font-family: 'Orbitron', monospace;
      font-size: 120px;
      font-weight: 900;
      background: linear-gradient(45deg, 
        var(--infinity-gold) 0%,
        var(--quantum-blue) 25%,
        var(--plasma-purple) 50%,
        var(--infinity-gold) 75%,
        var(--quantum-blue) 100%);
      background-size: 400% 400%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: infiniteShine 5s ease infinite;
      text-shadow: 0 0 80px rgba(255, 215, 0, 0.5);
      margin-bottom: 30px;
      line-height: 1.1;
    }
    
    @keyframes infiniteShine {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    .infinity-symbol {
      font-size: 80px;
      color: var(--infinity-gold);
      animation: rotate 4s linear infinite;
      display: inline-block;
    }
    
    @keyframes rotate {
      100% { transform: rotate(360deg); }
    }
    
    .compound-formula {
      font-family: 'Orbitron', monospace;
      font-size: 32px;
      color: var(--quantum-blue);
      margin: 30px 0;
      letter-spacing: 2px;
    }
    
    .live-counter {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
      max-width: 1200px;
      margin: 60px auto;
    }
    
    .counter-box {
      background: rgba(255, 215, 0, 0.05);
      border: 2px solid var(--infinity-gold);
      border-radius: 20px;
      padding: 30px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .counter-box::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.2), transparent);
      animation: scan 2s linear infinite;
    }
    
    @keyframes scan {
      100% { left: 100%; }
    }
    
    .counter-number {
      font-family: 'Orbitron', monospace;
      font-size: 48px;
      font-weight: 900;
      color: var(--infinity-gold);
      margin-bottom: 10px;
    }
    
    .counter-label {
      font-size: 14px;
      color: var(--quantum-blue);
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    
    .compound-visualization {
      margin: 80px 0;
      padding: 60px;
      background: rgba(0, 240, 255, 0.05);
      border: 2px solid var(--quantum-blue);
      border-radius: 30px;
    }
    
    .compound-layer {
      margin: 30px 0;
      padding: 30px;
      background: rgba(176, 38, 255, 0.05);
      border-left: 4px solid var(--plasma-purple);
      border-radius: 10px;
    }
    
    .layer-title {
      font-family: 'Orbitron', monospace;
      font-size: 24px;
      color: var(--plasma-purple);
      margin-bottom: 15px;
    }
    
    .growth-chart {
      display: flex;
      align-items: flex-end;
      gap: 10px;
      height: 300px;
      margin: 40px 0;
      padding: 20px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 20px;
    }
    
    .chart-bar {
      flex: 1;
      background: linear-gradient(to top, var(--infinity-gold), var(--quantum-blue));
      border-radius: 10px 10px 0 0;
      position: relative;
      transition: all 0.5s ease;
      cursor: pointer;
    }
    
    .chart-bar:hover {
      filter: brightness(1.5);
      transform: scaleY(1.05);
    }
    
    .chart-label {
      position: absolute;
      bottom: -30px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 11px;
      color: var(--quantum-blue);
      white-space: nowrap;
    }
    
    .infinite-tools-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 30px;
      margin: 60px 0;
    }
    
    .tool-card-infinite {
      background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(0, 240, 255, 0.05));
      border: 2px solid transparent;
      background-clip: padding-box;
      position: relative;
      padding: 40px;
      border-radius: 20px;
      transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      cursor: pointer;
    }
    
    .tool-card-infinite::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 20px;
      padding: 2px;
      background: linear-gradient(135deg, var(--infinity-gold), var(--quantum-blue), var(--plasma-purple));
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
    
    .tool-card-infinite:hover {
      transform: translateY(-15px) scale(1.02);
      box-shadow: 0 30px 80px rgba(255, 215, 0, 0.3);
    }
    
    .tool-icon-infinite {
      font-size: 56px;
      margin-bottom: 20px;
      filter: drop-shadow(0 0 30px var(--infinity-gold));
    }
    
    .tool-name-infinite {
      font-family: 'Orbitron', monospace;
      font-size: 28px;
      font-weight: 700;
      color: var(--infinity-gold);
      margin-bottom: 15px;
    }
    
    .revenue-tag {
      display: inline-block;
      padding: 8px 20px;
      background: rgba(255, 215, 0, 0.2);
      border: 1px solid var(--infinity-gold);
      border-radius: 50px;
      font-family: 'Orbitron', monospace;
      font-size: 14px;
      color: var(--infinity-gold);
      margin: 15px 0;
    }
    
    .pricing-infinity {
      margin: 100px 0;
      text-align: center;
    }
    
    .price-grid-infinite {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 40px;
      margin-top: 60px;
    }
    
    .price-card-infinite {
      background: rgba(0, 0, 0, 0.8);
      border: 3px solid var(--infinity-gold);
      border-radius: 30px;
      padding: 60px 40px;
      position: relative;
      overflow: hidden;
    }
    
    .price-card-infinite::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, transparent, rgba(255, 215, 0, 0.1), transparent);
      animation: rotate 4s linear infinite;
    }
    
    .tier-badge {
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      padding: 10px 30px;
      background: linear-gradient(135deg, var(--infinity-gold), var(--quantum-blue));
      font-family: 'Orbitron', monospace;
      font-weight: 700;
      font-size: 12px;
      letter-spacing: 3px;
      border-radius: 50px;
    }
    
    .price-infinite {
      font-family: 'Orbitron', monospace;
      font-size: 80px;
      font-weight: 900;
      background: linear-gradient(135deg, var(--infinity-gold), var(--quantum-blue));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 30px 0;
    }
    
    .btn-infinite {
      padding: 20px 60px;
      font-family: 'Orbitron', monospace;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 3px;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: all 0.3s;
      text-transform: uppercase;
    }
    
    .btn-infinite::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: width 0.6s, height 0.6s;
    }
    
    .btn-infinite:hover::before {
      width: 300px;
      height: 300px;
    }
    
    .btn-gold {
      background: linear-gradient(135deg, var(--infinity-gold), #FFA500);
      color: #000;
      box-shadow: 0 10px 50px rgba(255, 215, 0, 0.5);
    }
    
    .btn-gold:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 70px rgba(255, 215, 0, 0.7);
    }
    
    /* Responsive */
    @media (max-width: 1200px) {
      .mega-title { font-size: 72px; }
      .live-counter { grid-template-columns: repeat(2, 1fr); }
    }
    
    @media (max-width: 768px) {
      .mega-title { font-size: 48px; }
      .live-counter { grid-template-columns: 1fr; }
      .infinite-tools-grid { grid-template-columns: 1fr; }
      .price-grid-infinite { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <!-- Space Background -->
  <div class="space-canvas"></div>
  
  <!-- Money Rain -->
  <div class="money-rain" id="moneyRain"></div>
  
  <div class="container">
    <!-- Infinite Header -->
    <header class="infinity-header">
      <div class="infinity-badge">
        ∞ COMPOUND PROTOCOL ACTIVE ∞
      </div>
      
      <div class="mega-title">
        INFINITE<br/>
        COMPOUND<br/>
        <span class="infinity-symbol">∞</span>
      </div>
      
      <div class="compound-formula">
        (Money × Users × Products × Data)<sup>∞</sup> = TRILLIONAIRE
      </div>
      
      <!-- Live Counters -->
      <div class="live-counter">
        <div class="counter-box">
          <div class="counter-number" id="moneyCounter">₹0</div>
          <div class="counter-label">Total Revenue</div>
        </div>
        <div class="counter-box">
          <div class="counter-number" id="userCounter">0</div>
          <div class="counter-label">Active Users</div>
        </div>
        <div class="counter-box">
          <div class="counter-number" id="productCounter">100</div>
          <div class="counter-label">AI Tools</div>
        </div>
        <div class="counter-box">
          <div class="counter-number" id="growthCounter">0%</div>
          <div class="counter-label">Growth Rate</div>
        </div>
      </div>
      
      <button class="btn-infinite btn-gold" onclick="startInfiniteJourney()">
        ACTIVATE INFINITE COMPOUND
      </button>
    </header>
    
    <!-- Compound Visualization -->
    <section class="compound-visualization">
      <h2 style="font-family: 'Orbitron', monospace; font-size: 48px; text-align: center; margin-bottom: 60px; color: var(--quantum-blue);">
        THE INFINITE COMPOUND LAYERS
      </h2>
      
      <div class="compound-layer">
        <div class="layer-title">⚡ LAYER 1: Money Compounds Money</div>
        <p style="color: var(--stars); opacity: 0.8; line-height: 1.8;">
          Each rupee earned generates 10 more rupees through automated reinvestment in ads, 
          partnerships, and acquisitions. 5% daily growth = 48× monthly multiplication.
        </p>
        <div style="margin-top: 20px; font-family: 'Orbitron', monospace; color: var(--infinity-gold);">
          ₹10,000 → ₹4.8 Lakh (Month 1) → ₹482 Crore (Year 1)
        </div>
      </div>
      
      <div class="compound-layer">
        <div class="layer-title">👥 LAYER 2: Users Compound Users</div>
        <p style="color: var(--stars); opacity: 0.8; line-height: 1.8;">
          Viral coefficient of 10. Each user brings 10 friends through referral rewards. 
          Exponential growth creates billion-user platform in months.
        </p>
        <div style="margin-top: 20px; font-family: 'Orbitron', monospace; color: var(--infinity-gold);">
          Day 1: 1 user → Day 10: 10 Billion users
        </div>
      </div>
      
      <div class="compound-layer">
        <div class="layer-title">🤖 LAYER 3: Products Compound Products</div>
        <p style="color: var(--stars); opacity: 0.8; line-height: 1.8;">
          AI creates 10 new tools daily. Each tool generates ₹10 lakh/month. 
          365 days = 3,650 products = ₹365 Crore monthly recurring revenue.
        </p>
        <div style="margin-top: 20px; font-family: 'Orbitron', monospace; color: var(--infinity-gold);">
          100 tools → 3,750 tools (Year 1) → ₹375 Crore MRR
        </div>
      </div>
      
      <div class="compound-layer">
        <div class="layer-title">💎 LAYER 4: Data Compounds Value</div>
        <p style="color: var(--stars); opacity: 0.8; line-height: 1.8;">
          Each user interaction = ₹10 value. Billion users × 1000 actions = 
          1 Trillion data points = ₹10,000 Trillion valuation.
        </p>
        <div style="margin-top: 20px; font-family: 'Orbitron', monospace; color: var(--infinity-gold);">
          1M users → 1B users → 1T data points = ₹10,000 Trillion
        </div>
      </div>
      
      <div class="compound-layer">
        <div class="layer-title">🌍 LAYER 5: Network Compounds Network</div>
        <p style="color: var(--stars); opacity: 0.8; line-height: 1.8;">
          Each partnership creates 10 more partnerships. Global expansion through 
          strategic alliances multiplies market reach infinitely.
        </p>
        <div style="margin-top: 20px; font-family: 'Orbitron', monospace; color: var(--infinity-gold);">
          1 country → 10 countries → 100 countries → GLOBAL DOMINATION
        </div>
      </div>
    </section>
    
    <!-- Growth Chart -->
    <section style="margin: 100px 0;">
      <h2 style="font-family: 'Orbitron', monospace; font-size: 48px; text-align: center; margin-bottom: 60px; color: var(--quantum-blue);">
        EXPONENTIAL GROWTH TRAJECTORY
      </h2>
      
      <div class="growth-chart">
        <div class="chart-bar" style="height: 5%;">
          <div class="chart-label">Day 1<br/>₹10K</div>
        </div>
        <div class="chart-bar" style="height: 10%;">
          <div class="chart-label">Week 1<br/>₹1L</div>
        </div>
        <div class="chart-bar" style="height: 20%;">
          <div class="chart-label">Month 1<br/>₹10L</div>
        </div>
        <div class="chart-bar" style="height: 40%;">
          <div class="chart-label">Month 3<br/>₹1Cr</div>
        </div>
        <div class="chart-bar" style="height: 60%;">
          <div class="chart-label">Month 6<br/>₹100Cr</div>
        </div>
        <div class="chart-bar" style="height: 80%;">
          <div class="chart-label">Year 1<br/>₹1000Cr</div>
        </div>
        <div class="chart-bar" style="height: 100%;">
          <div class="chart-label">Year 2<br/>₹1L Cr</div>
        </div>
      </div>
    </section>
    
    <!-- Infinite Tools -->
    <section style="margin: 100px 0;">
      <h2 style="font-family: 'Orbitron', monospace; font-size: 48px; text-align: center; margin-bottom: 60px; color: var(--quantum-blue);">
        100 TRILLION-DOLLAR AI TOOLS
      </h2>
      
      <div class="infinite-tools-grid" id="infiniteTools">
        <!-- Tools loaded via JavaScript -->
      </div>
    </section>
    
    <!-- Pricing -->
    <section class="pricing-infinity">
      <h2 style="font-family: 'Orbitron', monospace; font-size: 72px; margin-bottom: 30px; color: var(--infinity-gold);">
        INFINITE WEALTH TIERS
      </h2>
      <p style="font-size: 18px; color: var(--quantum-blue); letter-spacing: 2px;">
        Choose Your Path to Trillionaire Status
      </p>
      
      <div class="price-grid-infinite">
        <div class="price-card-infinite">
          <div class="tier-badge">COMPOUND STARTER</div>
          <div style="position: relative; z-index: 1;">
            <div class="price-infinite">₹999</div>
            <div style="color: var(--quantum-blue); margin-bottom: 30px;">/month</div>
            <ul style="list-style: none; text-align: left; margin: 40px 0;">
              <li style="padding: 12px 0; color: var(--stars);">✓ All 100 AI Tools</li>
              <li style="padding: 12px 0; color: var(--stars);">✓ 5% Daily Compound</li>
              <li style="padding: 12px 0; color: var(--stars);">✓ Referral System (10x)</li>
              <li style="padding: 12px 0; color: var(--stars);">✓ API Access</li>
              <li style="padding: 12px 0; color: var(--stars);">✓ ₹1 Crore in 1 Year</li>
            </ul>
            <button class="btn-infinite btn-gold" style="width: 100%;" onclick="activateTier('starter')">
              START COMPOUND
            </button>
          </div>
        </div>
        
        <div class="price-card-infinite" style="border-color: var(--plasma-purple); transform: scale(1.05);">
          <div class="tier-badge" style="background: linear-gradient(135deg, var(--plasma-purple), var(--quantum-blue));">INFINITE MULTIPLIER</div>
          <div style="position: relative; z-index: 1;">
            <div class="price-infinite">₹9,999</div>
            <div style="color: var(--quantum-blue); margin-bottom: 30px;">/month</div>
            <ul style="list-style: none; text-align: left; margin: 40px 0;">
              <li style="padding: 12px 0; color: var(--stars);">✓ Everything in Starter</li>
              <li style="padding: 12px 0; color: var(--stars);">✓ 10% Daily Compound</li>
              <li style="padding: 12px 0; color: var(--stars);">✓ White Label Rights</li>
              <li style="padding: 12px 0; color: var(--stars);">✓ AI Auto-Pilot Mode</li>
              <li style="padding: 12px 0; color: var(--stars);">✓ ₹100 Crore in 1 Year</li>
            </ul>
            <button class="btn-infinite btn-gold" style="width: 100%;" onclick="activateTier('infinite')">
              GO INFINITE
            </button>
          </div>
        </div>
        
        <div class="price-card-infinite">
          <div class="tier-badge">TRILLIONAIRE PATH</div>
          <div style="position: relative; z-index: 1;">
            <div class="price-infinite">₹99,999</div>
            <div style="color: var(--quantum-blue); margin-bottom: 30px;">/month</div>
            <ul style="list-style: none; text-align: left; margin: 40px 0;">
              <li style="padding: 12px 0; color: var(--stars);">✓ Everything in Infinite</li>
              <li style="padding: 12px 0; color: var(--stars);">✓ 50% Daily Compound</li>
              <li style="padding: 12px 0; color: var(--stars);">✓ Equity Partnership</li>
              <li style="padding: 12px 0; color: var(--stars);">✓ Dedicated AI Team</li>
              <li style="padding: 12px 0; color: var(--stars);">✓ ₹10,000 Crore+ in 1 Year</li>
            </ul>
            <button class="btn-infinite btn-gold" style="width: 100%;" onclick="activateTier('trillionaire')">
              BECOME TRILLIONAIRE
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  <!-- Razorpay -->
  <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
  
  <script>
    // CONFIG - REPLACE THESE
    const RAZORPAY_KEY = 'rzp_test_XXXXXXXXXXXXX';
    
    // Infinite Tools Database
    const infiniteTools = [
      {id: 1, name: 'Money Multiplier AI', icon: '💰', revenue: '₹1 Cr/month', compound: '10x'},
      {id: 2, name: 'Viral Growth Engine', icon: '🚀', revenue: '₹50 L/month', compound: '100x'},
      {id: 3, name: 'Trillionaire Writer', icon: '✍️', revenue: '₹75 L/month', compound: '5x'},
      {id: 4, name: 'Quantum Image AI', icon: '🎨', revenue: '₹2 Cr/month', compound: '20x'},
      {id: 5, name: 'Billion Dollar Coder', icon: '💻', revenue: '₹3 Cr/month', compound: '15x'},
      {id: 6, name: 'Hedge Fund AI', icon: '📈', revenue: '₹10 Cr/month', compound: '50x'},
      {id: 7, name: 'Empire Builder', icon: '🏰', revenue: '₹5 Cr/month', compound: '25x'},
      {id: 8, name: 'Data Goldmine', icon: '💎', revenue: '₹8 Cr/month', compound: '40x'},
      // Add 92 more...
    ];
    
    // Render Tools
    function loadInfiniteTools() {
      const grid = document.getElementById('infiniteTools');
      grid.innerHTML = infiniteTools.map(tool => \`
        <div class="tool-card-infinite">
          <div class="tool-icon-infinite">\${tool.icon}</div>
          <div class="tool-name-infinite">\${tool.name}</div>
          <div class="revenue-tag">Worth \${tool.revenue}</div>
          <div style="color: var(--quantum-blue); margin-top: 15px;">
            Compound Factor: \${tool.compound}
          </div>
        </div>
      \`).join('');
    }
    
    // Live Counters
    let money = 0;
    let users = 0;
    let growth = 0;
    
    function startCounters() {
      setInterval(() => {
        money += Math.floor(Math.random() * 100000) + 50000;
        users += Math.floor(Math.random() * 100) + 50;
        growth = ((Math.random() * 10) + 5).toFixed(2);
        
        document.getElementById('moneyCounter').textContent = 
          '₹' + (money >= 10000000 ? (money/10000000).toFixed(1) + ' Cr' : (money/100000).toFixed(1) + ' L');
        document.getElementById('userCounter').textContent = users.toLocaleString();
        document.getElementById('growthCounter').textContent = growth + '%';
      }, 2000);
    }
    
    // Money Rain
    function createMoneyRain() {
      const rain = document.getElementById('moneyRain');
      setInterval(() => {
        const symbol = document.createElement('div');
        symbol.className = 'money-symbol';
        symbol.textContent = ['₹', '$', '€', '¥', '💰'][Math.floor(Math.random() * 5)];
        symbol.style.left = Math.random() * 100 + '%';
        symbol.style.animationDuration = (Math.random() * 3 + 2) + 's';
        rain.appendChild(symbol);
        setTimeout(() => symbol.remove(), 5000);
      }, 200);
    }
    
    // Payment
    function activateTier(tier) {
      const amounts = {
        starter: 99900,
        infinite: 999900,
        trillionaire: 9999900
      };
      
      const options = {
        key: RAZORPAY_KEY,
        amount: amounts[tier],
        currency: 'INR',
        name: 'INFINITE COMPOUND EMPIRE',
        description: tier.toUpperCase() + ' Tier Activation',
        handler: function(response) {
          localStorage.setItem('compound_tier', tier);
          alert('🎉 INFINITE COMPOUND ACTIVATED! Your journey to ₹1 TRILLION begins NOW!');
          location.reload();
        },
        theme: { color: '#FFD700' }
      };
      
      new Razorpay(options).open();
    }
    
    function startInfiniteJourney() {
      alert('Choose your tier below to activate infinite compound protocol!');
      document.querySelector('.pricing-infinity').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Initialize
    window.addEventListener('DOMContentLoaded', () => {
      loadInfiniteTools();
      startCounters();
      createMoneyRain();
    });
  </script>
</body>
</html>
  `;
  
  res.status(200).setHeader('Content-Type', 'text/html').send(html);
};