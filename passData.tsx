import { Override, Data, Color } from "framer"

const data = Data<any>({
    selectedItem: null,
    searchTerm: "",
})
export function SearchInput(): Override {
    return {
        value: data.searchTerm,
        onChange(value) {
            data.searchTerm = value
        },
    }
}
export function ProductCardList(): Override {
    return {
        onItemTap(item: any) {
            data.selectedItem = item
        },
    }
}

export function ModalCardList(): Override {
    return {
        onItemTap(item: any) {
            data.selectedItem = item
        },
    }
}

export function Title(): Override {
    return {
        text: data.selectedItem ? data.selectedItem.label : "",
    }
}

export function Description(): Override {
    return {
        text: data.selectedItem ? data.selectedItem.description : "",
    }
}

export function Image(): Override {
    const image = data.selectedItem ? data.selectedItem.product_image : ""
    return {
        image,
    }
}

export function SearchProductList(): Override {
    return {
        searchTerm: data.searchTerm,

        onItemTap(item: any) {
            data.selectedItem = item
        },
    }
}
