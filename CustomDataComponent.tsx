import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
// @ts-ignore
import { DataComponent } from "@framer/iain.data-component/code/DataComponent"

export type SortDirection = "ascending" | "descending"
export type SortKey = string | null

export function CustomDataComponent(props) {
    return (
        <DataComponent
            {...props}
            onSearchData={(data: any, searchTerm: string) => {
                /**
                 * This function is only called if search is enabled via the property controls
                 * and a search term is present. It will be called for the initial fetch of the data,
                 * whenever the search term changes, or when the sorting configuration is changed.
                 *
                 * This is a good place to override the default search behavior of the Data Component.
                 * Internally, the Data Component uses Fuse.js to perform a fuzzy-match search. You may
                 * want to do the same but instead use your own priority or exclude certain fields
                 * from being searched.
                 */

                return data
            }}
            onSortData={(
                data: any,
                sortDirection: SortDirection,
                sortKey: SortKey
            ) => {
                /**
                 * This function is called whenever data is fetched, a search is performed,
                 * the sort direction is changed, or the key you are sorting on has changed.
                 *
                 * The component only supports a single sort key, but this adapter could easily
                 * be extended to support multi-sort.
                 */
                return data.sort((a, b) => {
                    return 0
                })
            }}
            onFormatData={(data: any) => {
                /**
                 * This function is called every time data is received from your data source.
                 *
                 * This is a great opportunity to format your data, such as flattening your data structure,
                 * combining fields, generating dummy data, or filtering out irrelevant data.
                 *
                 * To see this in action, remove `.reverse()` from line 52. You'll then see your data in
                 * the opposite order to how it is shown now.
                 */
                return data.reverse()
            }}
        />
    )
}

CustomDataComponent.defaultProps = {
    ...DataComponent.defaultProps,
}

addPropertyControls(CustomDataComponent, DataComponent.propertyControls)
