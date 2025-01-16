export default function useAmountColorClass(amount){
    if(amount > 0) return 'text-positive';
    if(amount < 0) return 'text-negative';
}