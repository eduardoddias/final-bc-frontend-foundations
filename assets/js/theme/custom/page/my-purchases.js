import PageManager from '../../page-manager';

export default class MyPurchases extends PageManager {
    onReady() {
        const productList = document.querySelectorAll('#my-purchases-list li.my-purchases-product');

        const seenProducts = new Set();

        productList.forEach(product => {
            const dynamicClass = Array.from(product.classList)
                .find(className => className.startsWith('my-purchases-product-sku-'));
            
            if (seenProducts.has(dynamicClass)) {
                product.remove();
            } else {
                seenProducts.add(dynamicClass);
            }
        });

        const purchasesList = document.getElementById('my-purchases-list');
        if (purchasesList) {
            purchasesList.style.display = 'block';
        }
    }    
}
