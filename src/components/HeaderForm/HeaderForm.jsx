import React from 'react'
import InputText from "../Input/index.jsx"
import ReactSelect from "react-select"
import classes from "./header_form.module.scss"
import {useTranslation} from "react-i18next"
import {useSelector} from "react-redux"

function HeaderForm() {

    const {t} = useTranslation()
    const {categories} = useSelector(state => state.variables)

    return (
        <form className={classes['form-control']}>
            <h3>{t('submit_application')}</h3>
            <div className={classes['form-group']}>
                <InputText label={"name"} name={"name"}/>
            </div>

            <div className={classes['form-group']}>
                <InputText label={"phone_number"} name={"phone_number"}/>
            </div>

            <div className={classes['form-group']}>
              <div className={classes.select}>
                  <select name="category" id="react-select">
                      {categories.map(item=> <option value={item.value}>{item.label}</option>)}
                  </select>
                  <label htmlFor="name" className={classes['select-label']}>{t('categories')}</label>
              </div>
                {/*<ReactSelect*/}
                {/*    id={'react-select'}*/}
                {/*    options={categories}*/}
                {/*    isClearable={true}*/}
                {/*    name="category"*/}
                {/*    className={classes['react-select']}*/}
                {/*    placeholder={t('category')}*/}
                {/*    getOptionLabel={option => option?.label}*/}
                {/*    getOptionValue={option => option?.value}*/}
                {/*/>*/}
            </div>
            <div className={classes['form-group']}>
                <button>{t('send')}</button>
            </div>
        </form>
    )
}

export default HeaderForm





