import React from 'react';
import './header.css';
import dropdown from './icons/baseline_arrow_drop_down_white_18dp.png';
import search from './icons/baseline_search_white_18dp.png';
import add from './icons/baseline_add_circle_white_18dp.png';
import logo from './icons/logo.png';
import mail from './icons/baseline_mail_outline_white_18dp.png';
import notifications from './icons/18.png';
import profile from './icons/profile.png';
import rmenu from './icons/round_menu_white_18dp.png';
import clearSearch from './icons/round_close_black_18dp.png'

const Header =({isSearchVisible,isFormVisible,ToggleSearch,onClear,
    searchVal,onSearchChange,ToggleFormSearch,ToggleSearchHide,hide,SearchButtonClick})=>
{               
        return(
            <header>
                <div className = {'head ' + (!isSearchVisible ? 'head-height' : '')} onClick={ToggleSearchHide}>
                    <div className="mleft" >
                        <div className = {'' + ((isSearchVisible&&window.innerWidth<960) ? 'dnone' : '')}>
                            <a href="#Menu"><img src={rmenu} alt="menu" className="rmenu"></img></a>
                            <img src={logo} className="logo" alt="logo"></img>
                        </div>
                        {isSearchVisible&&(
                            <div className="someSearch" >
                                <i className="fa fa-search" id="searchIcon" onClick={ToggleFormSearch}></i>
                                <a href="#Clear" onClick={onClear} ><img src={clearSearch} className="clearSearch"alt="clear"></img></a>
                                <input type="text" name="search" value={searchVal}
                                    onChange={onSearchChange} placeholder="Введите что-то для поиска"
                                    onClick={ToggleFormSearch} className="search-text" />
                                <button type="submit" id='search-button' onClick={SearchButtonClick}>Найти</button>   
                                <a href="#Add"><img src={add} id="add" alt="add"></img></a>
                                {isFormVisible&&(
                                <form className="searchForm" onClick={ToggleFormSearch}>
                                    <div className="formMy">
                                        <input type="checkbox" name="check1"/>
                                        <label >мои</label>
                                        <input type="text" placeholder="Автор"/>
                                    </div>
                                    <div className="formSort">
                                        <strong><label>Сортировать по:</label></strong>
                                        <select>
                                            <option>дате</option>
                                            <option>имени</option>
                                            <option>популярности</option>
                                        </select>
                                    </div>
                                    <div className="formCheck">
                                        <input type="checkbox"/>
                                        <label>я участник</label>
                                        <input type="checkbox"/>
                                        <label>в заголовке</label>
                                        <input type="checkbox"/>
                                        <label>строгий поиск</label>
                                    </div>
                                </form>
                                )}
                            </div>
                        )}
                        {!isSearchVisible&&(
                            <div className="someMenu">
                                {hide&&(
                                    <input type="text" name="search" value={searchVal}
                                    onChange={onSearchChange} placeholder="Введите что-то для поиска"
                                    onClick={ToggleFormSearch} className="search-text-dissapear"/>
                                )}
                                <a href="#Links"className = {'' + (hide ? 'hide' : 'hider')}>Ссылки<img src={dropdown} className="item" alt="links" ></img></a>    
                                <a href="#Contacts"className = {'' + (hide ? 'hide' : 'hider')}>Контакты<img src={dropdown} className="item"alt="contacts"></img></a>
                                <a href="#Tags"className = {'' + (hide ? 'hide' : 'hider')}>Теги<img src={dropdown} className="item" alt="tags"></img></a>
                                <a href="#Request" className = {'' + (hide ? 'hide' : 'hider')}>Просьбы<img src={dropdown} className="item" alt="request"></img></a>
                                <a href="#Favorites" className = {'' + (hide ? 'hide' : 'hider')}>Избранное<img src={dropdown} className="item" alt="favorites"></img></a>
                                <a href="#Visit" className = {'' + (hide ? 'hide' : 'hider')}>Посещения<img src={dropdown} className="item" alt="visit"></img></a>
                                <a href="#Search" onClick={ToggleSearch}><img src={search} className="search" alt="search"></img></a>
                                <a href="#Add"><img src={add} id="add" alt="add"></img></a>
                            </div>
                        )}
                    </div>
                    <div className = {'mright ' + ((isSearchVisible&&window.innerWidth<960) ? 'dnone' : '')}>    
                        <a href="#Mail"><img src={mail} id="mail" alt="mail"></img></a>
                        <a href="#Notifications"><img src={notifications} id="notifications" alt="notifications"></img></a>
                        <a href="#Profile"><img src={profile} id="profile" alt="profile"></img></a>
                    </div>
                </div>
            </header>
    );
}

export default Header;