import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const PriceOptions=[
        {
          "id": 1,
          "name": "Basic",
          "price": 20,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "1 group class per week"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": 40,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "5 group classes per week",
            "1 personal training session per month"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": 60,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Unlimited group classes",
            "3 personal training sessions per month",
            "Access to sauna and steam room"
          ]
        },
        {
          "id": 4,
          "name": "VIP",
          "price": 100,
          "features": [
            "Access to all gym facilities",
            "Private locker",
            "Unlimited group classes",
            "Unlimited personal training sessions",
            "Access to VIP lounge",
            "Nutrition and meal planning sessions"
          ]
        }
      ];
      
    return (
        <div className="m-12">
             <h2 className="text-5xl">Best Prices In The Town</h2>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
             {
                PriceOptions.map(option=><PriceOption  key={option.id}
                option={option}
                ></PriceOption>)
             }
             </div>
        </div>
    );
};

export default PriceOptions;
