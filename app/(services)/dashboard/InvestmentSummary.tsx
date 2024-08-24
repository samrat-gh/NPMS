const InvestmentSummary = () => {
    const investmentSummary = {
        success: true,
        data: {
          totalInvestment: 120000,
          totalUnit: 600,
          investments: [{
            name: "Kumari Bank Limited",
            symbol: "KBL",
            nepseIndex: "Banking",
            wacc: 220,
            qty: 200,
            ltp: 258,
            p_Change: -2,
          }, 
         {
            name: "Hydroelectricity Investment and Development company",
            symbol: "HIDCL",
            nepseIndex: "Investment",
            wacc: 150,
            qty: 100,
            ltp: 316,
            p_change: -1,
         }
        
        ]
        } 
    }
    return (
        <div>

        </div>
    )
}

export default InvestmentSummary;