import React from 'react';
import Level from './Level/Level';
import Aux from '../../../hoc/Aux/Aux';
const roadmap =(props) => {

  // console.log(props);

  const ar = [
    [
      {
        src : "https://image.winudf.com/v2/image/YXBwcy5pbmZpbml0eS5hcHBsaWNhdGlvbnMuYmlnb19pY29uXzBfZGFjZDM0YWE/icon.png?w=170&fakeurl=1",
        title : "TimeComplexity",
      }
    ],
    [
      {
        src : "https://cdn4.iconfinder.com/data/icons/education-2-55/128/a-60-512.png",
        title : "Math",
      },
      {
        src : "https://cdn0.iconfinder.com/data/icons/big-data-24/64/x-11-512.png",
        title : "Arrays",
      }
    ]
    ,
    [
      {
        src : "https://media.geeksforgeeks.org/wp-content/uploads/BSTSearch.png",
        title : "Binary Search",
      },
      {
        src : "https://cdn4.iconfinder.com/data/icons/web-design-device-solid-style-set-2/91/Web_-_Design_-_Device_110-512.png",
        title : "Strings",
      },
      {
        src : "https://img.icons8.com/ios/452/32bit.png",
        title : "Bit Manipulation",
      }
      ,
      {
        src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNZw-vLYddHO7VlXgb9qot4CYXMhAuIJCbg&usqp=CAU",
        title : "Two Pointers",
      }
    ]
    ,
    [
      {
        src : "https://cdn0.iconfinder.com/data/icons/agile-basic-2-line-cut/468/Layer60-512.png",
        title : "Linked List",
      },
      {
        src : "https://static.thenounproject.com/png/390337-200.png",
        title : "Stacks and Queues",
      }
    ]
    ,
    [
      {
        src : "https://cdn.iconscout.com/icon/free/png-256/sync-1768052-1502225.png",
        title : "Backtracking",
      },
      {
        src : "https://cdn4.iconfinder.com/data/icons/cryptocurrency-bitcoin-and-blockchain-1/32/cryptocurrency_bitcoin_hashing_hash_function-512.png",
        title : "Hashing",
      }
    ]
    ,
    [
      {
        src : "https://cdn.iconscout.com/icon/premium/png-512-thumb/key-value-810917.png",
        title : "Heaps And Maps",
      },
      {
        src : "https://www.flaticon.com/svg/static/icons/svg/46/46564.svg",
        title : "Tree Data Structure",
      }
    ]
    ,
    [
      {
        src : "https://cdn4.iconfinder.com/data/icons/seo-elements-glyph-style/150/network-512.png",
        title : "Dynamic Programming",
      },
      {
        src : "https://cdn0.iconfinder.com/data/icons/negative-character-traits-alphabet-g/240/negative-g003-512.png",
        title : "Greedy Algorithm",
      }
    ]
    ,
    [
      {
        src : "https://media.geeksforgeeks.org/wp-content/cdn-uploads/8-2.png",
        title : "Graph Data Structure & Algorithms",
      }
    ]
  ]

  return(
  <Aux>
    <div className="text-center">
      <h1>RoadMap</h1>
      
      <div>
        <Level ar = {ar}/>
      </div>
    </div>
  </Aux>
  );
}

export default roadmap;