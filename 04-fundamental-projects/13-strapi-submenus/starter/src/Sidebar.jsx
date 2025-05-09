import {FaTimes}  from "react-icons/fa";
import sublinks from "./data.jsx";
import {useGlobalContext} from "./Context.jsx";

const Sidebar = () => {
    const {isSidebarOpen, closeSideBar} = useGlobalContext()
    return (
        <aside className='sidebar'>
            <div className="sidebar-container">
                <button className="close-btn">
                    <FaTimes />
                </button>
                <div className="sidebar-links">
                    {sublinks.map( item => {
                            console.log(item);
                            const { links, page, pageId } = item;
                            return <article key={pageId}>
                                <h4>{page}</h4>
                                <div className="sidebar-sublinks">
                                    {links.map((link) => {
                                        const { url, icon, label, id } = link;
                                        return <a key={id} href={url}>{icon}{label}</a>
                                    })}
                                </div>
                            </article>
                        }
                    )}
                </div>
            </div>
        </aside>

    );
}

export default Sidebar;
