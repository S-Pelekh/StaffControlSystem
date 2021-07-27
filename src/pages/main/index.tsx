import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setItemsPerPage, setToggleMenu } from '../../store/actions';
import { onGetUsers } from '../../store/thunks';
import { Main } from './styled';
import { bindActionCreators } from 'redux';
import RenderUsers from '../../components/renderUser/index';
import SearchInput from '../../components/searchInput/index';
import { SalaryFilter } from '../../components/salaryFilter/index';
import { StatusFilter } from '../../components/statusFilter/index';
import { SalaryCalc } from '../../components/salaryCalc';
import { Button } from '../../components/ui-kit/styled';
import { ReactComponent as CrossIcon } from '../../assets/cross.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import { EmtyCard } from '../../components/ui-kit/styled';
import { Modal } from '../../components/modal';
import { UsersSort } from '../../components/usersSort';
import { SalaryModal } from '../../components/salaryModal';
import { useTranslation } from 'react-i18next';
import { InitState } from '../../store/types';

export const MainPage = () => {
  const totalUsers = useSelector<InitState, number>((store) => store.users.length);
  const toggleClass = useSelector<InitState, boolean>((store) => store.toggleClass);
  const modalClass = useSelector<InitState, boolean>((store) => store.modalClass);
  const showSalaryClass = useSelector<InitState, boolean>((store) => store.showSalaryClass);
  const toggleMenu = useSelector<InitState, boolean>((store) => store.toggleMenu);
  const itemsPerPage = useSelector<InitState, number>((store) => store.itemsPerPage);
  const dispatch = useDispatch();
  const fetch = bindActionCreators(onGetUsers, dispatch);
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => i18n.changeLanguage(language);

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalUsers]);

  return (
    <Main>
      <div
        className={`shadow ${
          toggleClass || toggleMenu || showSalaryClass ? 'show' : ''
        }`}
        onClick={() =>
          toggleMenu ? dispatch(setToggleMenu(!toggleMenu)) : false
        }
      />
      <SearchInput />
      <div className="menu">
        <div className={`newUserLink ${toggleMenu ? 'showMenu' : ''}`}>
          <Link to="/new_user" onClick={() => dispatch(setToggleMenu(false))}>
            <Button>
              <CrossIcon />
              {t('main.button')}
            </Button>
          </Link>
        </div>
        <UsersSort />
        <MenuIcon onClick={() => dispatch(setToggleMenu(!toggleMenu))} />
        <div className={`menu-panel ${toggleMenu ? 'showMenu' : ''}`}></div>
      </div>

      <div className="usersBlock">
        <RenderUsers/>
        <EmtyCard />
        <EmtyCard />
      </div>

      <StatusFilter />
      <SalaryFilter />
      <SalaryCalc />
      <div className={`modalWindow ${modalClass ? 'open' : ''}`}>
        <Modal />
      </div>
      <div className={`salaryWindow ${showSalaryClass ? 'open' : ''}`}>
        <SalaryModal />
      </div>
      {totalUsers > itemsPerPage ? (
        <div
          className="showMore"
          onClick={() => dispatch(setItemsPerPage(itemsPerPage + 6))}>
          {t('main.showMore')}
        </div>
      ) : (
        <div></div>
      )}
      <div className="langBlock">
        <button onClick={() => changeLanguage('en')}>En</button>
        <button onClick={() => changeLanguage('ru')}>Ru</button>
      </div>
    </Main>
  );
};
