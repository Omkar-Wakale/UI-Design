import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  
  faqItems = [
    { 
     question: 'What is stock portfolio management?', 
     answer: 'Stock portfolio management refers to the process of managing a collection of stocks or securities held by an individual or an institution. It involves making investment decisions, monitoring the performance of stocks, and adjusting the portfolio based on market conditions and investment goals.', 
     expanded: false 
    },
     { 
     question: 'Why is stock portfolio management important?', 
     answer: 'SEffective stock portfolio management is important for several reasons. It helps investors achieve diversification, reduce risk, and maximize returns. It allows investors to align their portfolio with their investment objectives and risk tolerance. Additionally, portfolio management helps in monitoring and evaluating the performance of investments and making informed decisions.', 
     expanded: false 
    },
    { 
      question: 'What are the key components of stock portfolio management?', 
      answer: 'The key components of stock portfolio management include asset allocation, stock selection, risk management, performance tracking, and portfolio rebalancing. Asset allocation involves deciding the proportion of the portfolio allocated to different asset classes such as stocks, bonds, or cash. Stock selection involves researching and choosing individual stocks to include in the portfolio. Risk management involves assessing and managing the risks associated with the portfolio. Performance tracking involves monitoring the performance of the portfolio and comparing it to relevant benchmarks. Portfolio rebalancing involves adjusting the portfolio periodically to maintain the desired asset allocation.', 
      expanded: false 
    },
    { 
      question: 'How can I build a diversified stock portfolio', 
      answer: 'Building a diversified stock portfolio involves investing in a variety of stocks across different industries, sectors, and regions. This helps reduce the concentration risk associated with holding a few stocks. Diversification can be achieved by investing in stocks of different sizes (large-cap, mid-cap, small-cap), sectors (technology, healthcare, consumer goods, etc.), and geographies (domestic and international markets).', 
      expanded: false 
     },
     { 
      question: 'What are the common strategies used in stock portfolio management?', 
      answer: 'Common strategies used in stock portfolio management include value investing, growth investing, dividend investing, and index investing. Value investing involves identifying undervalued stocks and investing in them for potential long-term gains. Growth investing focuses on investing in companies with high growth potential. Dividend investing involves investing in stocks that pay regular dividends. Index investing involves passively investing in broad market indexes to achieve market returns.', 
      expanded: false 
     },
     { 
      question: 'How often should I review and rebalance my stock portfolio?', 
      answer: 'The frequency of reviewing and rebalancing a stock portfolio depends on individual preferences and market conditions. However, it is generally recommended to review the portfolio at least annually or semi-annually. Rebalancing should be done when the actual asset allocation deviates significantly from the desired allocation. This helps in maintaining the desired risk.', 
      expanded: false 
     },
    // Add more questions and answers as needed
  ];

  toggleAnswer(item: any) {
    item.expanded = !item.expanded;
  }
  
}