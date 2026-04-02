import Dropdown from "../Popup";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setAvailability,
  setMinPrice,
  setMaxPrice,
  resetPrice,
  resetFilters,
} from "../../../../store/slices/filterSlice";
import { MdDeleteOutline } from "react-icons/md";

const ProductsFilter = ({ products = [], filteredProducts = [] }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { availability, minPrice, maxPrice } = useSelector(
    (state) => state.filters,
  );

  // Heading
  const heading =
    location.pathname === "/"
      ? "HOME"
      : location.pathname
          .split("/")
          .filter(Boolean)
          .pop()
          .replace(/-/g, " ")
          .toUpperCase();

  // counts
  const inStockCount = products.filter((p) => p.inStock > 0).length;
  const outStockCount = products.filter((p) => p.inStock === 0).length;

  // max price
  const highestPrice = Math.max(...products.map((p) => p.price), 0);

  const hasFilters = availability || minPrice || maxPrice;

  const badgeClass =
    "bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center";

  return (
    <div className="hidden md:block w-full max-w-[1200px] mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-12 text-gray-900">{heading}</h2>

      <div className="flex flex-wrap justify-between items-center gap-4 pb-4">
        {/* Left Filters */}
        <div className="flex items-center gap-6 flex-wrap text-gray-500">
          <span>Filter:</span>

          {/* Availability */}
          <Dropdown title="Availability" dropdownClass="w-84">
            <div className="flex justify-between text-sm mb-3">
              <span>Selected {availability ? 1 : 0}</span>
              <button onClick={() => dispatch(setAvailability(null))}>
                Reset
              </button>
            </div>

            <hr className="mb-3" />

            <label className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                checked={availability === "instock"}
                onChange={() => dispatch(setAvailability("instock"))}
              />
              In Stock ({inStockCount})
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={availability === "outofstock"}
                onChange={() => dispatch(setAvailability("outofstock"))}
              />
              Out of stock ({outStockCount})
            </label>
          </Dropdown>

          {/* Price */}
          <Dropdown title="Price" dropdownClass="w-84">
            <div className="flex justify-between text-sm mb-3">
              <span>The highest price is {highestPrice}</span>
              <button onClick={() => dispatch(resetPrice())}>
                Reset
              </button>
            </div>

            <hr className="mb-3" />

            <div className="flex gap-2 items-center">
              <span>Rs</span>
              <input
                className="border rounded-lg px-2 py-1 w-full"
                type="number"
                placeholder="From"
                value={minPrice || ""}
                onChange={(e) =>
                  dispatch(
                    setMinPrice(
                      e.target.value === "" ? "" : Number(e.target.value),
                    ),
                  )
                }
              />

              <span>Rs</span>

              <input
                className="border rounded-lg px-2 py-1 w-full"
                type="number"
                placeholder="To"
                value={maxPrice || ""}
                onChange={(e) =>
                  dispatch(
                    setMaxPrice(
                      e.target.value === "" ? "" : Number(e.target.value),
                    ),
                  )
                }
              />
            </div>
          </Dropdown>
        </div>

        {/* Right Sort */}
        <div className="flex items-center gap-4 text-gray-500">
          <span>Sort by:</span>

          <Dropdown title="Featured" dropdownClass="w-56 right-0">
            <ul className="text-sm">
              <li className="px-3 py-2 hover:bg-gray-100">Featured</li>
              <li className="px-3 py-2 hover:bg-gray-100">Best Selling</li>
              <li className="px-3 py-2 hover:bg-gray-100">
                Alphabetically A-Z
              </li>
              <li className="px-3 py-2 hover:bg-gray-100">
                Alphabetically Z-A
              </li>
              <li className="px-3 py-2 hover:bg-gray-100">
                Price: low to high
              </li>
              <li className="px-3 py-2 hover:bg-gray-100">
                Price: high to low
              </li>
            </ul>
          </Dropdown>

          <span className="text-sm text-gray-500">
            {filteredProducts.length} Products
          </span>
        </div>
      </div>

      {hasFilters && (
        <div className="border-t pt-3 mt-3 flex flex-wrap items-center gap-2">
          {availability && (
            <div className="flex items-center gap-4">
              {" "}
              <span className={badgeClass}>
                Availability:{" "}
                {availability === "instock" ? "In Stock" : "Out of Stock"}
                <button>
                  <MdDeleteOutline
                    onClick={() => dispatch(setAvailability(null))}
                  />
                </button>
              </span>
            </div>
          )}
          {(minPrice || maxPrice) && (
            <span className={badgeClass}>
              Rs {minPrice || 0} - Rs {maxPrice || highestPrice}
              <button>
                <MdDeleteOutline
                  onClick={() => dispatch(setMinPrice(null))}
                />
              </button>
            </span>
          )}
          <button
            className="text-red-500 font-medium ml-2"
            onClick={() => dispatch(resetFilters())}
          >
            Remove all
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsFilter;
