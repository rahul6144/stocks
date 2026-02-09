// Mock data for indices
function getMockIndexData(indexName) {
    const mockData = {
      'NIFTY': { value: 25212.05, change: 16.25, changePercent: 0.06 },
      'BANKNIFTY': { value: 57168.95, change: 162.30, changePercent: 0.28 },
      'SENSEX': { value: 82634.48, change: 63.57, changePercent: 0.08 },
      'FINNIFTY': { value: 23145.20, change: -25.10, changePercent: -0.11 },
      'NIFTYNX50': { value: 30456.75, change: 45.20, changePercent: 0.15 },
      'MIDCPNIFTY': { value: 12478.90, change: -15.30, changePercent: -0.12 },
      'BANKEX': { value: 59234.60, change: 120.45, changePercent: 0.20 },
      'DOW JONES': { value: 44342.19, change: -142.30, changePercent: -0.32 },
      'NASDAQ': { value: 20895.66, change: 10.01, changePercent: 0.05 },
      'RUSSELL 2000': { value: 2240.01, change: -13.68, changePercent: -0.61 },
      'S&P 500': { value: 6296.79, change: -0.57, changePercent: -0.01 },
      'TSX': { value: 27314.01, change: -73.68, changePercent: -0.27 },
      'DOLLAR INDEX': { value: 98.58, change: 0.50, changePercent: 0.51 },
      'US 10 YR TREASURY': { value: 4.38, change: 0.00, changePercent: 0.05 },
      'CAC 40': { value: 7822.67, change: 0.67, changePercent: 0.01 },
      'FTSE 100': { value: 8992.12, change: 19.48, changePercent: 0.22 },
      'OMX': { value: 2584.12, change: -12.94, changePercent: -0.50 },
      'DAX': { value: 24289.51, change: -80.28, changePercent: -0.33 },
      'HANG SENG': { value: 20536.22, change: -68.45, changePercent: -0.33 },
      'NIKKEI 225': { value: 39653.80, change: 112.65, changePercent: 0.28 },
      'SHANGHAI COMPOSITE': { value: 3289.45, change: -15.20, changePercent: -0.46 },
      'KOSPI': { value: 2750.30, change: 10.75, changePercent: 0.39 },
      'NIFTY MIDCAP': { value: 13500.50, change: -20.75, changePercent: -0.15 },
      'NIFTY MIDCAP 50': { value: 12850.75, change: 15.30, changePercent: 0.12 },
      'NIFTY MIDCAP 100': { value: 14000.25, change: 30.45, changePercent: 0.22 },
      'NIFTY MIDCAP SELECT': { value: 13200.10, change: -10.20, changePercent: -0.08 },
      'RUSSELL MIDCAP': { value: 3100.45, change: 15.20, changePercent: 0.49 },
      'RUSSELL MIDCAP GROWTH': { value: 2950.30, change: 12.10, changePercent: 0.41 },
      'RUSSELL MIDCAP VALUE': { value: 3200.60, change: -8.90, changePercent: -0.28 },
      'RUSSELL 1000': { value: 3050.80, change: 10.25, changePercent: 0.34 },
      'FTSE 250': { value: 21000.33, change: 25.67, changePercent: 0.12 },
      'FTSE 350': { value: 4500.15, change: -15.44, changePercent: -0.34 },
      'OMX MIDCAP': { value: 1400.22, change: -5.44, changePercent: -0.39 },
      'DAX MIDCAP': { value: 2700.50, change: 8.20, changePercent: 0.30 },
      'HANG SENG MIDCAP': { value: 9800.65, change: -30.25, changePercent: -0.31 },
      'HANG SENG MIDCAP 50': { value: 9500.20, change: 20.10, changePercent: 0.21 },
      'NIKKEI MIDCAP': { value: 1850.40, change: 12.15, changePercent: 0.66 },
      'NIKKEI MIDCAP 100': { value: 1900.30, change: -10.75, changePercent: -0.56 },
      'NIFTY SMALLCAP': { value: 6500.25, change: 10.30, changePercent: 0.16 },
      'NIFTY SMALLCAP 50': { value: 6200.15, change: -8.40, changePercent: -0.14 },
      'NIFTY SMALLCAP 100': { value: 6700.35, change: 15.60, changePercent: 0.23 },
      'NIFTY SMALLCAP 250': { value: 6400.80, change: -12.25, changePercent: -0.19 },
      'RUSSELL SMALLCAP': { value: 1450.80, change: -8.90, changePercent: -0.61 },
      'RUSSELL 2000 GROWTH': { value: 1350.60, change: 7.20, changePercent: 0.53 },
      'RUSSELL 2000 VALUE': { value: 1500.45, change: -10.15, changePercent: -0.67 },
      'RUSSELL MICROCAP': { value: 700.50, change: -4.20, changePercent: -0.60 },
      'FTSE SMALLCAP': { value: 6800.25, change: 12.30, changePercent: 0.18 },
      'OMX SMALLCAP': { value: 600.15, change: 2.10, changePercent: 0.35 },
      'DAX SMALLCAP': { value: 1300.40, change: -6.80, changePercent: -0.52 },
      'CAC SMALL': { value: 7500.20, change: 18.45, changePercent: 0.25 },
      'HANG SENG SMALLCAP': { value: 4500.30, change: -10.50, changePercent: -0.23 },
      'HANG SENG SMALLCAP 50': { value: 4600.40, change: 15.20, changePercent: 0.33 },
      'NIKKEI SMALLCAP': { value: 900.25, change: 5.75, changePercent: 0.64 },
      'NIKKEI SMALLCAP 100': { value: 850.15, change: -4.30, changePercent: -0.50 }
    };
    return mockData[indexName] || { value: 'N/A', change: 'N/A', changePercent: 'N/A' };
  }
  
  // Mock data for stocks
  function getMockStockData(stockName) {
    const mockStockData = {
      'RELIANCE': { closingPrice: 3012.50 },
      'TCS': { closingPrice: 4215.30 },
      'HDFCBANK': { closingPrice: 1650.75 },
      'INFY': { closingPrice: 1820.20 }
    };
    return mockStockData[stockName] || { closingPrice: 'N/A' };
  }
  
  // Fetch real-time data from Alpha Vantage API
  async function fetchIndexData(indexName, symbol) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your Alpha Vantage API key
    try {
      const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`);
      const data = await response.json();
      if (data['Global Quote']) {
        const quote = data['Global Quote'];
        return {
          value: parseFloat(quote['05. price']).toFixed(2),
          change: parseFloat(quote['09. change']).toFixed(2),
          changePercent: parseFloat(quote['10. change percent']).replace('%', '')
        };
      } else {
        console.error(`No data for ${indexName}`);
        return getMockIndexData(indexName);
      }
    } catch (error) {
      console.error(`Error fetching data for ${indexName}:`, error);
      return getMockIndexData(indexName);
    }
  }
  
  // Toggle Manage Accounts sub-boxes
  function toggleManageAccountsSubboxes() {
    const subboxes = document.getElementById('manage-accounts-subboxes');
    subboxes.classList.toggle('hidden');
  }
  
  // Handle box click events
  function handleBoxClick(boxName) {
    console.log(`Clicked on ${boxName} Box`);
  }
  
  // Reset to Home Page (Stocks active)
  function resetToHomePage() {
    const navHamburgerMenu = document.getElementById('nav-hamburger-menu');
    navHamburgerMenu.classList.add('hidden');
    isNavMenuOpen = false;
    const secondaryNavHamburgerMenu = document.getElementById('secondary-nav-hamburger-menu');
    if (secondaryNavHamburgerMenu) {
      secondaryNavHamburgerMenu.classList.add('hidden');
      isSecondaryNavMenuOpen = false;
    }
    const mutualFundsPage = document.getElementById('mutual-funds-page');
    if (mutualFundsPage) {
      mutualFundsPage.remove();
    }
    const topHeader = document.querySelector('header');
    const secondaryHeader = document.querySelector('nav');
    topHeader.classList.remove('hidden');
    secondaryHeader.classList.remove('hidden');
    const mainContent = document.getElementById('main-content');
    mainContent.classList.remove('hidden', 'slide-out-left');
    mainContent.style.transform = 'translateX(0)';
    const hamburgerMenu = document.getElementById('hamburger-menu');
    hamburgerMenu.classList.add('hidden');
    isMenuOpen = false;
    const stocksLink = document.querySelector('.nav-link[onclick*="Stocks"]');
    setActiveNavLink(stocksLink, 'Stocks');
    const indiaLink = document.querySelector('.market-link[onclick*="India"]');
    setActiveLink(indiaLink, 'India');
  }
  
  // Reset to Stocks Page
  function resetToStocksPage() {
    const navHamburgerMenu = document.getElementById('nav-hamburger-menu');
    navHamburgerMenu.classList.add('hidden');
    isNavMenuOpen = false;
    const secondaryNavHamburgerMenu = document.getElementById('secondary-nav-hamburger-menu');
    if (secondaryNavHamburgerMenu) {
      secondaryNavHamburgerMenu.classList.add('hidden');
      isSecondaryNavMenuOpen = false;
    }
    const mutualFundsPage = document.getElementById('mutual-funds-page');
    if (mutualFundsPage) {
      mutualFundsPage.remove();
    }
    const topHeader = document.querySelector('header');
    const secondaryHeader = document.querySelector('nav');
    topHeader.classList.remove('hidden');
    secondaryHeader.classList.remove('hidden');
    const mainContent = document.getElementById('main-content');
    mainContent.classList.remove('hidden', 'slide-out-left');
    mainContent.style.transform = 'translateX(0)';
    const indiaLink = document.querySelector('.market-link[onclick*="India"]');
    setActiveLink(indiaLink, 'India');
    const stocksLink = document.querySelector('.nav-link[onclick*="Stocks"]');
    setActiveNavLink(stocksLink, 'Stocks');
  }
  
  // Render Mutual Funds page
  function renderMutualFundsPage() {
    let existingPage = document.getElementById('mutual-funds-page');
    if (existingPage) {
      existingPage.remove();
    }
    const mutualFundsPage = document.createElement('div');
    mutualFundsPage.id = 'mutual-funds-page';
    mutualFundsPage.className = 'pt-24 pb-16 flex-grow bg-gray-200';
    const container = document.createElement('div');
    container.className = 'container mx-auto px-4';
    const header = document.createElement('div');
    header.className = 'bg-white shadow-lg rounded-lg p-4 mt-4';
    header.innerHTML = `
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-bold text-gray-800">Mutual Funds</h2>
        <button id="back-to-stocks" class="text-2xl font-bold text-gray-800">←</button>
      </div>
    `;
    const content = document.createElement('div');
    content.className = 'bg-white shadow-lg rounded-lg p-4 mt-4';
    content.innerHTML = `
      <p class="text-gray-800 text-base font-medium">Explore Mutual Funds</p>
      <p class="text-sm text-gray-600">Placeholder content for Mutual Funds. Browse funds, view performance, and invest.</p>
    `;
    container.appendChild(header);
    container.appendChild(content);
    mutualFundsPage.appendChild(container);
    document.body.appendChild(mutualFundsPage);
    document.getElementById('back-to-stocks').addEventListener('click', closeMutualFundsPage);
    console.log('Rendered Mutual Funds Page');
  }
  
  // Close Mutual Funds page
  function closeMutualFundsPage() {
    const mutualFundsPage = document.getElementById('mutual-funds-page');
    if (mutualFundsPage) {
      mutualFundsPage.remove();
    }
    const mainContent = document.getElementById('main-content');
    mainContent.classList.remove('hidden', 'slide-out-left');
    mainContent.style.transform = 'translateX(0)';
    const topHeader = document.querySelector('header');
    const secondaryHeader = document.querySelector('nav');
    topHeader.classList.remove('hidden');
    secondaryHeader.classList.remove('hidden');
    const stocksLink = document.querySelector('.nav-link[onclick*="Stocks"]');
    setActiveNavLink(stocksLink, 'Stocks');
    console.log('Closed Mutual Funds Page');
  }
  
  // Open secondary navigation hamburger menu
  function openSecondaryNavHamburgerMenu(navItem) {
    if (navItem === 'Mutual Funds') {
      const mainContent = document.getElementById('main-content');
      mainContent.classList.add('slide-out-left');
      setTimeout(() => {
        mainContent.classList.add('hidden');
        mainContent.classList.remove('slide-out-left');
        mainContent.style.transform = 'translateX(0)';
        renderMutualFundsPage();
      }, 300);
      return;
    }
    let existingMenu = document.getElementById('secondary-nav-hamburger-menu');
    if (existingMenu) {
      existingMenu.remove();
    }
    const mutualFundsPage = document.getElementById('mutual-funds-page');
    if (mutualFundsPage) {
      mutualFundsPage.remove();
    }
    const secondaryNavHamburgerMenu = document.createElement('div');
    secondaryNavHamburgerMenu.id = 'secondary-nav-hamburger-menu';
    secondaryNavHamburgerMenu.className = 'fixed top-24 left-0 w-full h-[calc(100%-6rem)] bg-white z-15 flex flex-col overflow-y-auto box-border pt-12 pb-16';
    const secondaryNavMenuHeader = document.createElement('div');
    secondaryNavMenuHeader.id = 'secondary-nav-menu-header';
    secondaryNavMenuHeader.className = 'text-white py-3 px-4 flex justify-between items-center fixed top-12 w-full z-20 bg-blue-400';
    const secondaryNavMenuTitle = document.createElement('h2');
    secondaryNavMenuTitle.id = 'secondary-nav-menu-title';
    secondaryNavMenuTitle.className = 'text-xl font-bold';
    secondaryNavMenuTitle.textContent = `${navItem} Menu`;
    const closeButton = document.createElement('button');
    closeButton.id = 'close-secondary-nav-menu';
    closeButton.className = 'text-2xl font-bold';
    closeButton.textContent = '×';
    closeButton.onclick = closeSecondaryNavHamburgerMenu;
    secondaryNavMenuHeader.appendChild(secondaryNavMenuTitle);
    secondaryNavMenuHeader.appendChild(closeButton);
    const content = document.createElement('div');
    content.className = 'bg-white shadow-lg rounded-lg p-4 mt-4';
    content.innerHTML = `
      <p class="text-gray-800 text-base font-medium">Content for ${navItem}</p>
      <p class="text-sm text-gray-600">Placeholder content for the ${navItem} section.</p>
    `;
    secondaryNavHamburgerMenu.appendChild(secondaryNavMenuHeader);
    secondaryNavHamburgerMenu.appendChild(content);
    document.body.appendChild(secondaryNavHamburgerMenu);
    const mainContent = document.getElementById('main-content');
    mainContent.classList.add('slide-out-left');
    setTimeout(() => {
      mainContent.classList.add('hidden');
      mainContent.classList.remove('slide-out-left');
      mainContent.style.transform = 'translateX(0)';
      secondaryNavHamburgerMenu.classList.remove('hidden');
      isSecondaryNavMenuOpen = true;
      console.log(`Opened ${navItem} Secondary Hamburger Menu`);
    }, 300);
  }
  
  // Close secondary navigation hamburger menu
  function closeSecondaryNavHamburgerMenu() {
    const secondaryNavHamburgerMenu = document.getElementById('secondary-nav-hamburger-menu');
    if (secondaryNavHamburgerMenu) {
      const mainContent = document.getElementById('main-content');
      mainContent.classList.remove('hidden', 'slide-out-left');
      mainContent.style.transform = 'translateX(0)';
      secondaryNavHamburgerMenu.classList.add('hidden');
      isSecondaryNavMenuOpen = false;
      const stocksLink = document.querySelector('.nav-link[onclick*="Stocks"]');
      setActiveNavLink(stocksLink, 'Stocks');
    }
  }
  
  // Toggle profile hamburger menu
  function toggleHamburgerMenu() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    if (!isMenuOpen) {
      hamburgerMenu.classList.remove('hidden');
      isMenuOpen = true;
    } else {
      hamburgerMenu.classList.add('hidden');
      isMenuOpen = false;
    }
  }
  
  // Open navigation hamburger menu
  function openNavHamburgerMenu(navItem) {
    const navHamburgerMenu = document.getElementById('nav-hamburger-menu');
    const navMenuTitle = document.getElementById('nav-menu-title');
    const navMenuContentTitle = document.getElementById('nav-menu-content-title');
    const navMenuContentText = document.getElementById('nav-menu-content-text');
    const topHeader = document.querySelector('header');
    const secondaryHeader = document.querySelector('nav');
    const mainContent = document.getElementById('main-content');
    const mutualFundsPage = document.getElementById('mutual-funds-page');
    if (mutualFundsPage) {
      mutualFundsPage.remove();
    }
    topHeader.classList.add('hidden');
    secondaryHeader.classList.add('hidden');
    mainContent.classList.add('hidden');
    navMenuTitle.textContent = `${navItem} Menu`;
    navMenuContentTitle.textContent = `Content for ${navItem}`;
    navMenuContentText.textContent = `Placeholder content for the ${navItem} section.`;
    navHamburgerMenu.classList.remove('hidden');
    isNavMenuOpen = true;
    console.log(`Opened ${navItem} Hamburger Menu`);
  }
  
  // Close navigation hamburger menu
  function closeNavHamburgerMenu() {
    const navHamburgerMenu = document.getElementById('nav-hamburger-menu');
    const topHeader = document.querySelector('header');
    const secondaryHeader = document.querySelector('nav');
    const mainContent = document.getElementById('main-content');
    topHeader.classList.remove('hidden');
    secondaryHeader.classList.remove('hidden');
    mainContent.classList.remove('hidden', 'slide-out-left');
    mainContent.style.transform = 'translateX(0)';
    navHamburgerMenu.classList.add('hidden');
    isNavMenuOpen = false;
    const stocksLink = document.querySelector('.nav-link[onclick*="Stocks"]');
    setActiveNavLink(stocksLink, 'Stocks');
  }
  
  // Set active navigation link
  function setActiveNavLink(element, navItem) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('text-blue-600', 'underline');
      link.classList.add('text-gray-800');
    });
    element.classList.remove('text-gray-800');
    element.classList.add('text-blue-600', 'underline');
    console.log(`Set ${navItem} as active nav link`);
  }
  
  let currentMoverType = 'gainers';
  let currentCapType = 'large-cap';
  let currentMarket = 'India';
  let indicesData = [];
  let isMenuOpen = false;
  let isNavMenuOpen = false;
  let isSecondaryNavMenuOpen = false;
  
  // Event listeners
  document.getElementById('close-menu').addEventListener('click', () => {
    document.getElementById('hamburger-menu').classList.add('hidden');
    isMenuOpen = false;
  });
  document.getElementById('close-nav-menu').addEventListener('click', closeNavHamburgerMenu);
  document.getElementById('profile-logo').addEventListener('click', toggleHamburgerMenu);
  
  // Toggle movers (Gainers/Losers)
  function toggleMovers(type) {
    const gainersBtn = document.getElementById('gainers-btn');
    const losersBtn = document.getElementById('losers-btn');
    currentMoverType = type;
    if (type === 'gainers') {
      gainersBtn.classList.remove('bg-gray-200', 'text-gray-800');
      gainersBtn.classList.add('bg-blue-600', 'text-white');
      losersBtn.classList.remove('bg-blue-600', 'text-white');
      losersBtn.classList.add('bg-gray-200', 'text-gray-800');
    } else {
      losersBtn.classList.remove('bg-gray-200', 'text-gray-800');
      losersBtn.classList.add('bg-blue-600', 'text-white');
      gainersBtn.classList.remove('bg-blue-600', 'text-white');
      gainersBtn.classList.add('bg-gray-200', 'text-gray-800');
    }
    updateMoversCarousel(currentCapType);
  }
  
  // Toggle cap type
  function toggleCap(type) {
    const largeCapBtn = document.getElementById('large-cap-btn');
    const midCapBtn = document.getElementById('mid-cap-btn');
    const smallCapBtn = document.getElementById('small-cap-btn');
    largeCapBtn.classList.remove('bg-blue-600', 'text-white');
    largeCapBtn.classList.add('bg-gray-200', 'text-gray-800');
    midCapBtn.classList.remove('bg-blue-600', 'text-white');
    midCapBtn.classList.add('bg-gray-200', 'text-gray-800');
    smallCapBtn.classList.remove('bg-blue-600', 'text-white');
    smallCapBtn.classList.add('bg-gray-200', 'text-gray-800');
    if (type === 'large-cap') {
      largeCapBtn.classList.remove('bg-gray-200', 'text-gray-800');
      largeCapBtn.classList.add('bg-blue-600', 'text-white');
    } else if (type === 'mid-cap') {
      midCapBtn.classList.remove('bg-gray-200', 'text-gray-800');
      midCapBtn.classList.add('bg-blue-600', 'text-white');
    } else if (type === 'small-cap') {
      smallCapBtn.classList.remove('bg-gray-200', 'text-gray-800');
      smallCapBtn.classList.add('bg-blue-600', 'text-white');
    }
    currentCapType = type;
    updateMoversCarousel(type);
  }
  
  // Update movers carousel
  function updateMoversCarousel(capType) {
    const moversCarousel = document.getElementById('movers-carousel');
    moversCarousel.innerHTML = '';
    let indicesToShow = [];
    const capIndices = {
      'large-cap': {
        'India': [
          { name: 'NIFTY', symbol: 'NSE:NIFTY' },
          { name: 'BANKNIFTY', symbol: 'NSE:BANKNIFTY' },
          { name: 'SENSEX', symbol: 'BSE:SENSEX' },
          { name: 'FINNIFTY', symbol: 'NSE:FINNIFTY' },
          { name: 'NIFTYNX50', symbol: 'NSE:NIFTY_NEXT_50' },
          { name: 'MIDCPNIFTY', symbol: 'NSE:MIDCPNIFTY' },
          { name: 'BANKEX', symbol: 'BSE:BANKEX' }
        ],
        'USA': [
          { name: 'DOW JONES', symbol: 'INDEXDJX:.DJI' },
          { name: 'NASDAQ', symbol: 'NASDAQ:.IXIC' },
          { name: 'RUSSELL 2000', symbol: 'INDEXRUS:.RUT' },
          { name: 'S&P 500', symbol: 'INDEXSP:.INX' },
          { name: 'TSX', symbol: 'INDEXTSI:.GSPTSE' },
          { name: 'DOLLAR INDEX', symbol: 'NYBOT:DX' },
          { name: 'US 10 YR TREASURY', symbol: 'AMEX:TNX' }
        ],
        'Europe': [
          { name: 'CAC 40', symbol: 'INDEXEURO:PX1' },
          { name: 'FTSE 100', symbol: 'INDEXFTSE:UKX' },
          { name: 'OMX', symbol: 'INDEXNASDAQ:OMX' },
          { name: 'DAX', symbol: 'INDEXDB:DAX' }
        ],
        'Asia': [
          { name: 'HANG SENG', symbol: 'INDEXHANGSENG:HSI' },
          { name: 'NIKKEI 225', symbol: 'INDEXNIKKEI:NI225' },
          { name: 'SHANGHAI COMPOSITE', symbol: 'INDEXSHANGHAI:000001.SS' },
          { name: 'KOSPI', symbol: 'INDEXKOSPI:KS11' }
        ]
      },
      'mid-cap': {
        'India': [
          { name: 'NIFTY MIDCAP' },
          { name: 'NIFTY MIDCAP 50' },
          { name: 'NIFTY MIDCAP 100' },
          { name: 'NIFTY MIDCAP SELECT' }
        ],
        'USA': [
          { name: 'RUSSELL MIDCAP' },
          { name: 'RUSSELL MIDCAP GROWTH' },
          { name: 'RUSSELL MIDCAP VALUE' },
          { name: 'RUSSELL 1000' }
        ],
        'Europe': [
          { name: 'FTSE 250' },
          { name: 'FTSE 350' },
          { name: 'OMX MIDCAP' },
          { name: 'DAX MIDCAP' }
        ],
        'Asia': [
          { name: 'HANG SENG MIDCAP' },
          { name: 'HANG SENG MIDCAP 50' },
          { name: 'NIKKEI MIDCAP' },
          { name: 'NIKKEI MIDCAP 100' }
        ]
      },
      'small-cap': {
        'India': [
          { name: 'NIFTY SMALLCAP' },
          { name: 'NIFTY SMALLCAP 50' },
          { name: 'NIFTY SMALLCAP 100' },
          { name: 'NIFTY SMALLCAP 250' }
        ],
        'USA': [
          { name: 'RUSSELL SMALLCAP' },
          { name: 'RUSSELL 2000 GROWTH' },
          { name: 'RUSSELL 2000 VALUE' },
          { name: 'RUSSELL MICROCAP' }
        ],
        'Europe': [
          { name: 'FTSE SMALLCAP' },
          { name: 'OMX SMALLCAP' },
          { name: 'DAX SMALLCAP' },
          { name: 'CAC SMALL' }
        ],
        'Asia': [
          { name: 'HANG SENG SMALLCAP' },
          { name: 'HANG SENG SMALLCAP 50' },
          { name: 'NIKKEI SMALLCAP' },
          { name: 'NIKKEI SMALLCAP 100' }
        ]
      }
    };
    indicesToShow = capIndices[capType][currentMarket] || [];
    let sortedIndices = indicesData
      .filter(data => indicesToShow.some(index => index.name === data.name))
      .sort((a, b) => {
        const aValue = parseFloat(a.changePercent);
        const bValue = parseFloat(b.changePercent);
        return currentMoverType === 'gainers' ? bValue - aValue : aValue - bValue;
      })
      .slice(0, 4);
    if (sortedIndices.length < 4) {
      const mockIndices = indicesToShow.map(index => ({
        ...getMockIndexData(index.name),
        name: index.name
      }));
      sortedIndices = mockIndices
        .sort((a, b) => {
          const aValue = parseFloat(a.changePercent);
          const bValue = parseFloat(b.changePercent);
          return currentMoverType === 'gainers' ? bValue - aValue : aValue - bValue;
        })
        .slice(0, 4);
    }
    sortedIndices.forEach(data => {
      const isPositive = data.change >= 0;
      const box = document.createElement('div');
      box.className = 'flex-none w-32 bg-white shadow-lg rounded-lg p-3 mx-1 snap-start border border-gray-200';
      box.innerHTML = `
        <p class="text-gray-800 text-sm font-medium">${data.name}</p>
        <p>
          <span class="${isPositive ? 'text-green-600' : 'text-red-600'} text-xs font-medium">${data.value}</span>
          <span class="${isPositive ? 'text-green-600' : 'text-red-600'} text-xs">${isPositive ? '+' : ''}${data.change}</span>
          <span class="${isPositive ? 'text-green-600' : 'text-red-600'} text-xs">(${data.changePercent}%)</span>
        </p>
      `;
      moversCarousel.appendChild(box);
    });
  }
  
  // Set active market link
  async function setActiveLink(element, market) {
    currentMarket = market;
    document.querySelectorAll('.market-link').forEach(link => {
      link.classList.remove('text-blue-600', 'underline');
      link.classList.add('text-gray-800');
    });
    element.classList.remove('text-gray-800');
    element.classList.add('text-blue-600', 'underline');
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = '';
    let indices = [];
    if (market === 'India') {
      indices = [
        { name: 'NIFTY', symbol: 'NSE:NIFTY' },
        { name: 'BANKNIFTY', symbol: 'NSE:BANKNIFTY' },
        { name: 'SENSEX', symbol: 'BSE:SENSEX' },
        { name: 'FINNIFTY', symbol: 'NSE:FINNIFTY' },
        { name: 'NIFTYNX50', symbol: 'NSE:NIFTY_NEXT_50' },
        { name: 'MIDCPNIFTY', symbol: 'NSE:MIDCPNIFTY' },
        { name: 'BANKEX', symbol: 'BSE:BANKEX' }
      ];
    } else if (market === 'USA') {
      indices = [
        { name: 'DOW JONES', symbol: 'INDEXDJX:.DJI' },
        { name: 'NASDAQ', symbol: 'NASDAQ:.IXIC' },
        { name: 'RUSSELL 2000', symbol: 'INDEXRUS:.RUT' },
        { name: 'S&P 500', symbol: 'INDEXSP:.INX' },
        { name: 'TSX', symbol: 'INDEXTSI:.GSPTSE' },
        { name: 'DOLLAR INDEX', symbol: 'NYBOT:DX' },
        { name: 'US 10 YR TREASURY', symbol: 'AMEX:TNX' }
      ];
    } else if (market === 'Europe') {
      indices = [
        { name: 'CAC 40', symbol: 'INDEXEURO:PX1' },
        { name: 'FTSE 100', symbol: 'INDEXFTSE:UKX' },
        { name: 'OMX', symbol: 'INDEXNASDAQ:OMX' },
        { name: 'DAX', symbol: 'INDEXDB:DAX' }
      ];
    } else if (market === 'Asia') {
      indices = [
        { name: 'HANG SENG', symbol: 'INDEXHANGSENG:HSI' },
        { name: 'NIKKEI 225', symbol: 'INDEXNIKKEI:NI225' },
        { name: 'SHANGHAI COMPOSITE', symbol: 'INDEXSHANGHAI:000001.SS' },
        { name: 'KOSPI', symbol: 'INDEXKOSPI:KS11' }
      ];
    }
    indicesData = [];
    for (const index of indices) {
      const data = await fetchIndexData(index.name, index.symbol);
      indicesData.push({ ...data, name: index.name });
    }
    indicesData.forEach(data => {
      const isPositive = data.change >= 0;
      const box = document.createElement('div');
      box.className = 'flex-none w-48 bg-white shadow-lg rounded-lg p-4 mx-2 snap-start border border-gray-200';
      box.innerHTML = `
        <p class="text-gray-800 text-base font-medium">${data.name}</p>
        <p>
          <span class="${isPositive ? 'text-green-600' : 'text-red-600'} text-sm font-medium">${data.value}</span>
          <span class="${isPositive ? 'text-green-600' : 'text-red-600'} text-sm">${isPositive ? '+' : ''}${data.change}</span>
          <span class="${isPositive ? 'text-green-600' : 'text-red-600'} text-sm">(${data.changePercent}%)</span>
        </p>
      `;
      carousel.appendChild(box);
    });
    updateMoversCarousel(currentCapType);
    console.log(`Set ${market} as active market link`);
  }
  
  // Initialize page
  async function initializePage() {
    const indiaLink = document.querySelector('.market-link[onclick*="India"]');
    await setActiveLink(indiaLink, 'India');
  }
  
  initializePage();