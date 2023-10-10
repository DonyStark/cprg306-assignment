import { useState } from 'react';

function NewItem() {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = { name, quantity, category };
        console.log(item);
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label>Name: 
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="border p-2"/>
                </label>
            </div>
            <div>
                <label>Quantity: 
                    <input type="number" min="1" max="99" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required className="border p-2"/>
                </label>
            </div>
            <div>
                <label>Category: 
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2">
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </label>
            </div>
            <div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
            </div>
        </form>
    );
}

export default NewItem;