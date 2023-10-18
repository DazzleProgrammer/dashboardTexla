import React from "react";
import "./Table.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Table() {
  return (
    <div className="main__section">
      <p className="para">Onboarded Companies</p>
      <div className="table">
        <div className="table__header">
          <div className="type">
            <p className="table__para">All</p>
            <IconButton>
              <KeyboardArrowDownIcon />
            </IconButton>
          </div>
          <div className="search">
            <IconButton>
              <SearchIcon />
            </IconButton>
            <input
              className="table__para"
              placeholder="Search client or invoice number"
            ></input>
          </div>
        </div>

        <div className="table__main">
          <table>
            <tr className="table__head">
              <th>Company Name</th>
              <th>Onboarding Date</th>
              <th>Go-Live Date</th>
              <th>Total User Base</th>
              <th>Last Billing</th>
              <th>Status</th>
            </tr>
            <tr className="table__data">
              <td className="company__name blue">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAq1BMVEX6cxf5cxb////5bQD5ZwD6cAr6YQD+3c/7iU791MP+/fr7gUT5YgD91sT+9O/6fjf6ilL7pn75cB7/+fb8xq/5dCT6hUf6m2T+5Nj7waf5agD5bwz8vJ77s5D7q4H+7OH+6d/6kFb8wKL9z7v5WgD5eyn7onP6h0H5eTD6kVr7m3H7r4v+8+n6mV38pnf7pYD6hCj6hTX7oGz5eQ36i0n7r4H7rYr6lmX6gUkIn2q3AAAEt0lEQVR4nO3dfXeaOgDH8UBAquVBBSwkKlpaWyfrbq23ve//lV2t27GBaNEdJfH8vv9tE+enPAbiKSEIIYQQQgghhBBCCCGEEEIIIYQQQgihk6JuS4mYcS7gbeKoUDK0ziW8MdXIa51pJSojbEP4l8JOg7bOJYRO0G2uwcg/v7D9QJur1buA0HON5rIghBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghbExIjvto+15ODJtSZlnuOstilNoH3/iSwv5xEdkHJ5zy/uN0HHlJti7x7mdPcZ/aSghZ5HhH5KS0+nFt+3k+dEJTqMhfbvuUNy90J+ZRJVb5w1LjZuxIv+lXpNNY8gO5sLCVHCd0SkJOu6P9P6Qw7XKpUR8hi3uH3yAb3TKdhVY3+m6Bjjdn1b1REyFnP5wai0xe7ApRDyGn46zWMv6ClIlaCDld+DUX8hdarkM2rgs0O8PyyV8HoTWrt4luyh81FLJu/QWdx8o5UeFrmslWaBvy00SnyLKidIEzeaqe9C8opNM7oZ8vwvWld1dqut3erF+S67Ri+A9bDy4s9josdn/rTysXepcdW1AmZAWCMO2L/8y2q4NKtlHn9cHdXmlz6j5M/5wp/aVsHNrgCJgOBGEUy15k2IuyL1u6wtUZc7fnknDRkr2BSkLZ+Ke6Cr1B5d1a082LhlKg6kJij8vAQLavxZ4ZufJhsOJCO/BKu+BANn5YjxzTfeN8xYV0Lo7n/ZlkDX7+KNi+GxlqCwkZiasw2gM8kNpC/twWgMVKuo1qLLSDQhDmx69C1YVT4Xom7F2dkM7E48zbgfuiegq5eKBJ5Od0jYWE34u74fUJiThwSq9P2M8F4fCUZ1gQQnheIUkFYXR9+yEfCkLv6oRGaXSYnXBJo7pwKQjD1Z5nhPoK6UocHp5yqFFbyAPxHmtCjr8wVVwYi6eLcHxtI2DC3wWhmQRH74lqCw06F586dVLJU97fkuZnKpwi5IF4G8P0F/KDje3mc/kdDsWFhL6YJeK4JTnaWMwxHbldcaFBb8r3vMN7Xj7c0Id5sbmrL/1vVBcS+q9ZLrlzv+x0Nms95p+3c/zqw0MNhOtXSSZhTEavlrV5PMUsi3x4f25XtV3JVDjlhb8/YblO5qWj9/dR6nz5V192L059IbfFIdShkrdGnwGfKDSYbDuVF6ZWZTvVQGhYH7WnKmTLyklRB+Ex0028oMHZJqcLDTarO48j+1FeiXoICVvW21D9YdDgvLa/EG6mDeVSkthkHFcu6XQRGixYFFLVrk4+r06+1EdocDqPDv42F28pHTzqI1wvEH9EoRS3mR/8M5BP129SKP4eofxb4Xo1xjcj2SEnGf33vO/rCA0K7ef7dFc0q/OdGm7z/tM4n+xWZZjkvaDPJTtg88L1uMfaxWi9Lw2Rz8Xo2+qj15t9rN42f7D5gWV1/WaXvZ0GeOjrQJoL6wchhBBufytZy24u9yLrsB80V/x+AWGRt5srT8LzCxUIQggPCTsqdD4hMQa3ShTwMwEJafBM+LXzARFCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYS+6X/ys/boQmURVQAAAABJRU5ErkJggg=="
                  alt=""
                />
                <div className="text__name">
                  <h4>Texlaculture</h4>
                  <p>INV-17048</p>
                </div>
              </td>

              <td>12 Jan 2022</td>
              <td>07 Aug 2022</td>
              <td>244</td>
              <td>07 Aug 2022</td>
              <td className="table__status">
                <button>Active</button>
              </td>
            </tr>
            <tr className="table__data">
              <td className="company__name green">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAq1BMVEX6cxf5cxb////5bQD5ZwD6cAr6YQD+3c/7iU791MP+/fr7gUT5YgD91sT+9O/6fjf6ilL7pn75cB7/+fb8xq/5dCT6hUf6m2T+5Nj7waf5agD5bwz8vJ77s5D7q4H+7OH+6d/6kFb8wKL9z7v5WgD5eyn7onP6h0H5eTD6kVr7m3H7r4v+8+n6mV38pnf7pYD6hCj6hTX7oGz5eQ36i0n7r4H7rYr6lmX6gUkIn2q3AAAEt0lEQVR4nO3dfXeaOgDH8UBAquVBBSwkKlpaWyfrbq23ve//lV2t27GBaNEdJfH8vv9tE+enPAbiKSEIIYQQQgghhBBCCCGEEEIIIYQQQgihk6JuS4mYcS7gbeKoUDK0ziW8MdXIa51pJSojbEP4l8JOg7bOJYRO0G2uwcg/v7D9QJur1buA0HON5rIghBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghbExIjvto+15ODJtSZlnuOstilNoH3/iSwv5xEdkHJ5zy/uN0HHlJti7x7mdPcZ/aSghZ5HhH5KS0+nFt+3k+dEJTqMhfbvuUNy90J+ZRJVb5w1LjZuxIv+lXpNNY8gO5sLCVHCd0SkJOu6P9P6Qw7XKpUR8hi3uH3yAb3TKdhVY3+m6Bjjdn1b1REyFnP5wai0xe7ApRDyGn46zWMv6ClIlaCDld+DUX8hdarkM2rgs0O8PyyV8HoTWrt4luyh81FLJu/QWdx8o5UeFrmslWaBvy00SnyLKidIEzeaqe9C8opNM7oZ8vwvWld1dqut3erF+S67Ri+A9bDy4s9josdn/rTysXepcdW1AmZAWCMO2L/8y2q4NKtlHn9cHdXmlz6j5M/5wp/aVsHNrgCJgOBGEUy15k2IuyL1u6wtUZc7fnknDRkr2BSkLZ+Ke6Cr1B5d1a082LhlKg6kJij8vAQLavxZ4ZufJhsOJCO/BKu+BANn5YjxzTfeN8xYV0Lo7n/ZlkDX7+KNi+GxlqCwkZiasw2gM8kNpC/twWgMVKuo1qLLSDQhDmx69C1YVT4Xom7F2dkM7E48zbgfuiegq5eKBJ5Od0jYWE34u74fUJiThwSq9P2M8F4fCUZ1gQQnheIUkFYXR9+yEfCkLv6oRGaXSYnXBJo7pwKQjD1Z5nhPoK6UocHp5yqFFbyAPxHmtCjr8wVVwYi6eLcHxtI2DC3wWhmQRH74lqCw06F586dVLJU97fkuZnKpwi5IF4G8P0F/KDje3mc/kdDsWFhL6YJeK4JTnaWMwxHbldcaFBb8r3vMN7Xj7c0Id5sbmrL/1vVBcS+q9ZLrlzv+x0Nms95p+3c/zqw0MNhOtXSSZhTEavlrV5PMUsi3x4f25XtV3JVDjlhb8/YblO5qWj9/dR6nz5V192L059IbfFIdShkrdGnwGfKDSYbDuVF6ZWZTvVQGhYH7WnKmTLyklRB+Ex0028oMHZJqcLDTarO48j+1FeiXoICVvW21D9YdDgvLa/EG6mDeVSkthkHFcu6XQRGixYFFLVrk4+r06+1EdocDqPDv42F28pHTzqI1wvEH9EoRS3mR/8M5BP129SKP4eofxb4Xo1xjcj2SEnGf33vO/rCA0K7ef7dFc0q/OdGm7z/tM4n+xWZZjkvaDPJTtg88L1uMfaxWi9Lw2Rz8Xo2+qj15t9rN42f7D5gWV1/WaXvZ0GeOjrQJoL6wchhBBufytZy24u9yLrsB80V/x+AWGRt5srT8LzCxUIQggPCTsqdD4hMQa3ShTwMwEJafBM+LXzARFCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYS+6X/ys/boQmURVQAAAABJRU5ErkJggg=="
                  alt=""
                />

                <div className="text__name">
                  <h4>Pinch Life</h4>
                  <p>INV-17048</p>
                </div>
              </td>

              <td>11 Feb 2022</td>
              <td>06 May 2022</td>
              <td>1000</td>
              <td>07 Aug 2022</td>
              <td className="table__status">
                <button>Active</button>
              </td>
            </tr>
            <tr className="table__data">
              <td className="company__name yellow">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAq1BMVEX6cxf5cxb////5bQD5ZwD6cAr6YQD+3c/7iU791MP+/fr7gUT5YgD91sT+9O/6fjf6ilL7pn75cB7/+fb8xq/5dCT6hUf6m2T+5Nj7waf5agD5bwz8vJ77s5D7q4H+7OH+6d/6kFb8wKL9z7v5WgD5eyn7onP6h0H5eTD6kVr7m3H7r4v+8+n6mV38pnf7pYD6hCj6hTX7oGz5eQ36i0n7r4H7rYr6lmX6gUkIn2q3AAAEt0lEQVR4nO3dfXeaOgDH8UBAquVBBSwkKlpaWyfrbq23ve//lV2t27GBaNEdJfH8vv9tE+enPAbiKSEIIYQQQgghhBBCCCGEEEIIIYQQQgihk6JuS4mYcS7gbeKoUDK0ziW8MdXIa51pJSojbEP4l8JOg7bOJYRO0G2uwcg/v7D9QJur1buA0HON5rIghBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghbExIjvto+15ODJtSZlnuOstilNoH3/iSwv5xEdkHJ5zy/uN0HHlJti7x7mdPcZ/aSghZ5HhH5KS0+nFt+3k+dEJTqMhfbvuUNy90J+ZRJVb5w1LjZuxIv+lXpNNY8gO5sLCVHCd0SkJOu6P9P6Qw7XKpUR8hi3uH3yAb3TKdhVY3+m6Bjjdn1b1REyFnP5wai0xe7ApRDyGn46zWMv6ClIlaCDld+DUX8hdarkM2rgs0O8PyyV8HoTWrt4luyh81FLJu/QWdx8o5UeFrmslWaBvy00SnyLKidIEzeaqe9C8opNM7oZ8vwvWld1dqut3erF+S67Ri+A9bDy4s9josdn/rTysXepcdW1AmZAWCMO2L/8y2q4NKtlHn9cHdXmlz6j5M/5wp/aVsHNrgCJgOBGEUy15k2IuyL1u6wtUZc7fnknDRkr2BSkLZ+Ke6Cr1B5d1a082LhlKg6kJij8vAQLavxZ4ZufJhsOJCO/BKu+BANn5YjxzTfeN8xYV0Lo7n/ZlkDX7+KNi+GxlqCwkZiasw2gM8kNpC/twWgMVKuo1qLLSDQhDmx69C1YVT4Xom7F2dkM7E48zbgfuiegq5eKBJ5Od0jYWE34u74fUJiThwSq9P2M8F4fCUZ1gQQnheIUkFYXR9+yEfCkLv6oRGaXSYnXBJo7pwKQjD1Z5nhPoK6UocHp5yqFFbyAPxHmtCjr8wVVwYi6eLcHxtI2DC3wWhmQRH74lqCw06F586dVLJU97fkuZnKpwi5IF4G8P0F/KDje3mc/kdDsWFhL6YJeK4JTnaWMwxHbldcaFBb8r3vMN7Xj7c0Id5sbmrL/1vVBcS+q9ZLrlzv+x0Nms95p+3c/zqw0MNhOtXSSZhTEavlrV5PMUsi3x4f25XtV3JVDjlhb8/YblO5qWj9/dR6nz5V192L059IbfFIdShkrdGnwGfKDSYbDuVF6ZWZTvVQGhYH7WnKmTLyklRB+Ex0028oMHZJqcLDTarO48j+1FeiXoICVvW21D9YdDgvLa/EG6mDeVSkthkHFcu6XQRGixYFFLVrk4+r06+1EdocDqPDv42F28pHTzqI1wvEH9EoRS3mR/8M5BP129SKP4eofxb4Xo1xjcj2SEnGf33vO/rCA0K7ef7dFc0q/OdGm7z/tM4n+xWZZjkvaDPJTtg88L1uMfaxWi9Lw2Rz8Xo2+qj15t9rN42f7D5gWV1/WaXvZ0GeOjrQJoL6wchhBBufytZy24u9yLrsB80V/x+AWGRt5srT8LzCxUIQggPCTsqdD4hMQa3ShTwMwEJafBM+LXzARFCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYS+6X/ys/boQmURVQAAAABJRU5ErkJggg=="
                  alt=""
                />
                <div className="text__name">
                  <h4>O Buddy</h4>
                  <p>INV-17048</p>
                </div>
              </td>
              <td>10 Sep 2022</td>
              <td>05 Oct 2022</td>
              <td>150</td>
              <td>207 Aug 2022</td>
              <td className="table__status__draft">
                <button>Draft</button>
              </td>
            </tr>
          </table>
        </div>

        <div className="table__footer">
          <div className="toogle">
            <IconButton>
              <ToggleOffIcon />
            </IconButton>
            <p>Dence</p>
          </div>
          <div className="footer__right">
            <p>Rows per page:</p>
            <p>5</p>
            <IconButton>
              <KeyboardArrowDownIcon />
            </IconButton>
            <p>6-10 of 11</p>

            <IconButton>
              <KeyboardArrowLeftIcon />
            </IconButton>

            <IconButton>
              <KeyboardArrowRightIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
