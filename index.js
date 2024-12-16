
// Function for Tabs (indiv & firm tabs)
function showTab(tab) {
    const individualTab = document.getElementById('individualTab');
    const firmTab = document.getElementById('firmTab');
    const individualForm = document.getElementById('individualForm');
    const firmForm = document.getElementById('firmForm');

    if (tab === 'individual') {
      individualTab.classList.add('active');
      firmTab.classList.remove('active');
      individualForm.style.display = 'block';
      firmForm.style.display = 'none';
    } else {
      firmTab.classList.add('active');
      individualTab.classList.remove('active');
      firmForm.style.display = 'block';
      individualForm.style.display = 'none';
    }
  } 


// Function for search
function search(type) {
    const results = document.getElementById("results");
    const resultContent = document.getElementById("resultContent");
    let input;
  
    if (type === "individual") {
      const nameInput = document.getElementById("individualName").value.trim().toLowerCase();
      const firmInput = document.getElementById("firmNameOptional").value.trim().toLowerCase();
      const locationInput = document.getElementById("locationOptional").value.trim().toLowerCase();
      input = `${nameInput} ${firmInput} ${locationInput}`;
    } else {
      const firmName = document.getElementById("firmName").value.trim().toLowerCase();
      const firmLocation = document.getElementById("firmLocation").value.trim().toLowerCase();
      input = `${firmName} ${firmLocation}`;
    }
  
    const data = {
    "pilotportfoliofx": {
      name: "PilotPortfolioFX",
      details: "An investment firm specializing in forex and portfolio management.",
      zip: "12345",
      city: "New York",
      state: "NY"
    },
    "crd#:828928": {
      name: "PilotPortfolioFX",
      details: "An investment firm specializing in forex and portfolio management.",
      zip: "12345",
      city: "New York",
      state: "NY"
      
    },
    
    "nextlevelinvestments": {
    name: "Next Level Investments",
    details: "Helping clients achieve their next level of financial success.",
    zip: "99001",
    city: "Atlanta",
    state: "GA"
    },
    "globalinvestments": {
      name: "Global Investments",
      details: "Offering worldwide opportunities in stock and crypto markets.",
      zip: "67890",
      city: "San Francisco",
      state: "CA"
    },
    "securewealth": {
      name: "Secure Wealth",
      details: "Focused on secure and long-term real estate investments.",
      zip: "54321",
      city: "Chicago",
      state: "IL"
    },
    "cryptoadvisors": {
      name: "Crypto Advisors",
      details: "Experts in cryptocurrency trading and blockchain technology.",
      zip: "98765",
      city: "Miami",
      state: "FL"
    },
    "wealthbuilders": {
      name: "Wealth Builders",
      details: "Specialists in diversified portfolio management and investments.",
      zip: "24680",
      city: "Dallas",
      state: "TX"
    },
    "futureinvest": {
      name: "Future Invest",
      details: "Pioneers in green energy and sustainable investment opportunities.",
      zip: "13579",
      city: "Seattle",
      state: "WA"
    },
    "reliablesecurities": {
      name: "Reliable Securities",
      details: "Secure and reliable financial securities investments.",
      zip: "11223",
      city: "Denver",
      state: "CO"
    },
    "smartgrowth": {
      name: "Smart Growth",
      details: "Targeting fast-growth sectors in technology and health care.",
      zip: "33445",
      city: "Boston",
      state: "MA"
    },
    "oceaninvestments": {
      name: "Ocean Investments",
      details: "Specialists in marine and offshore business opportunities.",
      zip: "55667",
      city: "Houston",
      state: "TX"
    },
    "eliteportfolios": {
      name: "Elite Portfolios",
      details: "Providing premium portfolio management for high-net-worth clients.",
      zip: "77889",
      city: "Los Angeles",
      state: "CA"
    },

  "trustyfinance": {
    name: "Trusty Finance",
    details: "Reliable investment solutions for small and medium businesses.",
    zip: "10203",
    city: "Austin",
    state: "TX"
  },
  "silverlinetraders": {
    name: "Silverline Traders",
    details: "Specializing in precious metals and commodities trading.",
    zip: "20304",
    city: "Phoenix",
    state: "AZ"
  },
  "skylinecapital": {
    name: "Skyline Capital",
    details: "Real estate investment opportunities in urban centers.",
    zip: "30405",
    city: "Charlotte",
    state: "NC"
  },
  "primeventures": {
    name: "Prime Ventures",
    details: "Focused on venture capital and startup investments.",
    zip: "40506",
    city: "San Diego",
    state: "CA"
  },
  "bluechipadvisors": {
    name: "Blue Chip Advisors",
    details: "Providing advice on stable and high-performing stocks.",
    zip: "50607",
    city: "Portland",
    state: "OR"
  },
  "zenithwealth": {
    name: "Zenith Wealth",
    details: "Delivering top-tier investment strategies for growth.",
    zip: "60708",
    city: "Salt Lake City",
    state: "UT"
  },
  "pinnacleinvestments": {
    name: "Pinnacle Investments",
    details: "Helping investors reach the pinnacle of financial success.",
    zip: "70809",
    city: "Las Vegas",
    state: "NV"
  },
  "horizonfunds": {
    name: "Horizon Funds",
    details: "Long-term investments in emerging markets and industries.",
    zip: "80910",
    city: "Orlando",
    state: "FL"
  },
  "venturelink": {
    name: "Venture Link",
    details: "Connecting investors with promising startups and businesses.",
    zip: "90111",
    city: "Nashville",
    state: "TN"
  },
  "prodigyinvestments": {
    name: "Prodigy Investments",
    details: "Guiding young investors to financial success.",
    zip: "10212",
    city: "Minneapolis",
    state: "MN"
  },
  "alphainvestmentgroup": {
    name: "Alpha Investment Group",
    details: "Leading the market with innovative investment approaches.",
    zip: "20313",
    city: "Columbus",
    state: "OH"
  },
  "impactfunds": {
    name: "Impact Funds",
    details: "Investing in socially responsible and sustainable projects.",
    zip: "30414",
    city: "Indianapolis",
    state: "IN"
  },
  "steadyreturns": {
    name: "Steady Returns",
    details: "Offering consistent returns through diversified investments.",
    zip: "40515",
    city: "Kansas City",
    state: "MO"
  },
  "highridgecapital": {
    name: "High Ridge Capital",
    details: "Building wealth through secure financial strategies.",
    zip: "50616",
    city: "Cincinnati",
    state: "OH"
  },

  "elevateinvestments": {
    name: "Elevate Investments",
    details: "Focused on helping clients achieve financial elevation through strategic investments.",
    zip: "11234",
    city: "Tampa",
    state: "FL"
  },
  "summitcapital": {
    name: "Summit Capital",
    details: "Leading the way in financial planning and wealth management.",
    zip: "22345",
    city: "Detroit",
    state: "MI"
  },
  "grandvisiongroup": {
    name: "Grand Vision Group",
    details: "Empowering clients with big-picture investment strategies.",
    zip: "33456",
    city: "Phoenix",
    state: "AZ"
  },
  "victorywealth": {
    name: "Victory Wealth",
    details: "Dedicated to ensuring clients achieve financial victories.",
    zip: "44567",
    city: "Oklahoma City",
    state: "OK"
  },
  "apexcapital": {
    name: "Apex Capital",
    details: "Providing top-tier investment solutions for individuals and businesses.",
    zip: "55678",
    city: "St. Louis",
    state: "MO"
  },
  "ventureaxis": {
    name: "Venture Axis",
    details: "Specialists in global business investments and venture capital.",
    zip: "66789",
    city: "Milwaukee",
    state: "WI"
  },
  "prosperitypartners": {
    name: "Prosperity Partners",
    details: "Creating pathways to financial prosperity for all clients.",
    zip: "77890",
    city: "Cleveland",
    state: "OH"
  },
  "infinitywealth": {
    name: "Infinity Wealth",
    details: "Pioneering infinite opportunities in real estate and crypto markets.",
    zip: "88901",
    city: "Memphis",
    state: "TN"
  },
  "everestcapitalgroup": {
    name: "Everest Capital Group",
    details: "Climbing to the top of the financial world with innovative investments.",
    zip: "99012",
    city: "Raleigh",
    state: "NC"
  },
  "northstarequity": {
    name: "NorthStar Equity",
    details: "Guiding clients toward the brightest financial opportunities.",
    zip: "10123",
    city: "Sacramento",
    state: "CA"
  },
  "precisioninvest": {
    name: "Precision Invest",
    details: "Targeted investment strategies with measurable results.",
    zip: "20234",
    city: "Pittsburgh",
    state: "PA"
  },
  "summitglobal": {
    name: "Summit Global",
    details: "Connecting local investors with global opportunities.",
    zip: "30345",
    city: "Richmond",
    state: "VA"
  },
  "optimalfunds": {
    name: "Optimal Funds",
    details: "Delivering optimal financial solutions for every stage of life.",
    zip: "40456",
    city: "Salt Lake City",
    state: "UT"
  },
  "brightfuturecapital": {
    name: "Bright Future Capital",
    details: "Building brighter futures with sustainable investment strategies.",
    zip: "50567",
    city: "Albuquerque",
    state: "NM"
  },
  "legacyinvestments": {
    name: "Legacy Investments",
    details: "Helping clients leave a legacy through smart financial choices.",
    zip: "60678",
    city: "Boise",
    state: "ID"
  },
  "trailblazercapital": {
    name: "Trailblazer Capital",
    details: "Leading the way in innovative and disruptive market investments.",
    zip: "70789",
    city: "Little Rock",
    state: "AR"
  },
  "goldlineventures": {
    name: "Goldline Ventures",
    details: "Specializing in gold and commodity-based investments.",
    zip: "80890",
    city: "Madison",
    state: "WI"
  },
  "stabilityfunds": {
    name: "Stability Funds",
    details: "Providing stability through diverse and low-risk investments.",
    zip: "90901",
    city: "Omaha",
    state: "NE"
  },
  "primeassetgroup": {
    name: "Prime Asset Group",
    details: "Expertise in managing prime real estate and equities.",
    zip: "10112",
    city: "Anchorage",
    state: "AK"
  },
  "pioneerinvestments": {
    name: "Pioneer Investments",
    details: "Breaking new ground with cutting-edge financial opportunities.",
    zip: "21234",
    city: "Tulsa",
    state: "OK"
  },
  "robinhood": {
    name: "Robinhood",
    details: "A commission-free platform for trading stocks, ETFs, and cryptocurrencies.",
    zip: "94063",
    city: "Menlo Park",
    state: "CA"
  },
  "stash": {
    name: "Stash",
    details: "An easy-to-use app for beginners to invest in stocks and ETFs.",
    zip: "10001",
    city: "New York",
    state: "NY"
  },
  "acorns": {
    name: "Acorns",
    details: "Micro-investing platform that rounds up your spare change into investments.",
    zip: "92660",
    city: "Irvine",
    state: "CA"
  },
  "etrade": {
    name: "E*TRADE",
    details: "A veteran in online stock and options trading, with robust tools for active traders.",
    zip: "19801",
    city: "Wilmington",
    state: "DE"
  },
  "fidelity": {
    name: "Fidelity Investments",
    details: "A leading platform offering a wide range of investment options and research tools.",
    zip: "02109",
    city: "Boston",
    state: "MA"
  },
  "webull": {
    name: "Webull",
    details: "A mobile-first brokerage platform offering free trades and advanced charting tools.",
    zip: "10022",
    city: "New York",
    state: "NY"
  },
  "tdameritrade": {
    name: "TD Ameritrade",
    details: "Offers powerful trading platforms for active traders and beginners alike.",
    zip: "68154",
    city: "Omaha",
    state: "NE"
  },
  "sofi": {
    name: "SoFi Invest",
    details: "Combines personal loans, student loan refinancing, and investment options.",
    zip: "94105",
    city: "San Francisco",
    state: "CA"
  },
  "wealthfront": {
    name: "Wealthfront",
    details: "An automated investment service that manages your portfolio for you.",
    zip: "94301",
    city: "Palo Alto",
    state: "CA"
  },
  "betterment": {
    name: "Betterment",
    details: "A robo-advisory service that optimizes your investments and retirement planning.",
    zip: "10166",
    city: "New York",
    state: "NY"
  }
  };
  
    // Check for a match in the data object
    const matchedKey = Object.keys(data).find(key => input.includes(key));
    if (matchedKey) {
      const match = data[matchedKey];
      results.style.display = "block";
      resultContent.innerHTML = `
        <strong>Name:</strong> ${match.name}<br>
        <strong>Details:</strong> ${match.details}<br>
        <strong>Location:</strong> ${match.city}, ${match.state}<br>
        <strong>ZIP Code:</strong> ${match.zip}
      `;
    } else {
      results.style.display = "block";
      resultContent.innerHTML = "No results found. Please try again.";
    }
  }