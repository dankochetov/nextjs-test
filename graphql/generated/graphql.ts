/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** ISO8601 Date values */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  create_appointments_item?: Maybe<Appointments>;
  create_appointments_items?: Maybe<Array<Maybe<Appointments>>>;
  create_articles_content_creators_2_item?: Maybe<Articles_Content_Creators_2>;
  create_articles_content_creators_2_items?: Maybe<Array<Maybe<Articles_Content_Creators_2>>>;
  create_articles_content_creators_3_item?: Maybe<Articles_Content_Creators_3>;
  create_articles_content_creators_3_items?: Maybe<Array<Maybe<Articles_Content_Creators_3>>>;
  create_articles_content_creators_4_item?: Maybe<Articles_Content_Creators_4>;
  create_articles_content_creators_4_items?: Maybe<Array<Maybe<Articles_Content_Creators_4>>>;
  create_articles_item?: Maybe<Articles>;
  create_articles_items?: Maybe<Array<Maybe<Articles>>>;
  create_availability_pages_item?: Maybe<Availability_Pages>;
  create_availability_pages_items?: Maybe<Array<Maybe<Availability_Pages>>>;
  create_booking_pages_item?: Maybe<Booking_Pages>;
  create_booking_pages_items?: Maybe<Array<Maybe<Booking_Pages>>>;
  create_cities_item?: Maybe<Cities>;
  create_cities_items?: Maybe<Array<Maybe<Cities>>>;
  create_clinics_item?: Maybe<Clinics>;
  create_clinics_items?: Maybe<Array<Maybe<Clinics>>>;
  create_clinics_owners_item?: Maybe<Clinics_Owners>;
  create_clinics_owners_items?: Maybe<Array<Maybe<Clinics_Owners>>>;
  create_clinics_practitioners_clinics_item?: Maybe<Clinics_Practitioners_Clinics>;
  create_clinics_practitioners_clinics_items?: Maybe<Array<Maybe<Clinics_Practitioners_Clinics>>>;
  create_clinics_practitioners_item?: Maybe<Clinics_Practitioners>;
  create_clinics_practitioners_items?: Maybe<Array<Maybe<Clinics_Practitioners>>>;
  create_content_creators_item?: Maybe<Content_Creators>;
  create_content_creators_items?: Maybe<Array<Maybe<Content_Creators>>>;
  create_countries_item?: Maybe<Countries>;
  create_countries_items?: Maybe<Array<Maybe<Countries>>>;
  create_faqs_item?: Maybe<Faqs>;
  create_faqs_items?: Maybe<Array<Maybe<Faqs>>>;
  create_i18n_locales_item?: Maybe<I18n_Locales>;
  create_i18n_locales_items?: Maybe<Array<Maybe<I18n_Locales>>>;
  create_invoices_item?: Maybe<Invoices>;
  create_invoices_items?: Maybe<Array<Maybe<Invoices>>>;
  create_pages_item?: Maybe<Pages>;
  create_pages_items?: Maybe<Array<Maybe<Pages>>>;
  create_posts_item?: Maybe<Posts>;
  create_posts_items?: Maybe<Array<Maybe<Posts>>>;
  create_publishers_item?: Maybe<Publishers>;
  create_publishers_items?: Maybe<Array<Maybe<Publishers>>>;
  create_redirects_item?: Maybe<Redirects>;
  create_redirects_items?: Maybe<Array<Maybe<Redirects>>>;
  create_seopage_links_item?: Maybe<Seopage_Links>;
  create_seopage_links_items?: Maybe<Array<Maybe<Seopage_Links>>>;
  create_sitemap_page_sections_item?: Maybe<Sitemap_Page_Sections>;
  create_sitemap_page_sections_items?: Maybe<Array<Maybe<Sitemap_Page_Sections>>>;
  create_sitemap_pages_item?: Maybe<Sitemap_Pages>;
  create_sitemap_pages_items?: Maybe<Array<Maybe<Sitemap_Pages>>>;
  create_sitemap_section_links_item?: Maybe<Sitemap_Section_Links>;
  create_sitemap_section_links_items?: Maybe<Array<Maybe<Sitemap_Section_Links>>>;
  create_states_item?: Maybe<States>;
  create_states_items?: Maybe<Array<Maybe<States>>>;
  create_suburbs_item?: Maybe<Suburbs>;
  create_suburbs_items?: Maybe<Array<Maybe<Suburbs>>>;
  create_tokens_item?: Maybe<Tokens>;
  create_tokens_items?: Maybe<Array<Maybe<Tokens>>>;
  create_upload_file_item?: Maybe<Upload_File>;
  create_upload_file_items?: Maybe<Array<Maybe<Upload_File>>>;
  create_upload_file_morph_item?: Maybe<Upload_File_Morph>;
  create_upload_file_morph_items?: Maybe<Array<Maybe<Upload_File_Morph>>>;
  delete_appointments_item?: Maybe<Delete_One>;
  delete_appointments_items?: Maybe<Delete_Many>;
  delete_articles_content_creators_2_item?: Maybe<Delete_One>;
  delete_articles_content_creators_2_items?: Maybe<Delete_Many>;
  delete_articles_content_creators_3_item?: Maybe<Delete_One>;
  delete_articles_content_creators_3_items?: Maybe<Delete_Many>;
  delete_articles_content_creators_4_item?: Maybe<Delete_One>;
  delete_articles_content_creators_4_items?: Maybe<Delete_Many>;
  delete_articles_item?: Maybe<Delete_One>;
  delete_articles_items?: Maybe<Delete_Many>;
  delete_availability_pages_item?: Maybe<Delete_One>;
  delete_availability_pages_items?: Maybe<Delete_Many>;
  delete_booking_pages_item?: Maybe<Delete_One>;
  delete_booking_pages_items?: Maybe<Delete_Many>;
  delete_cities_item?: Maybe<Delete_One>;
  delete_cities_items?: Maybe<Delete_Many>;
  delete_clinics_item?: Maybe<Delete_One>;
  delete_clinics_items?: Maybe<Delete_Many>;
  delete_clinics_owners_item?: Maybe<Delete_One>;
  delete_clinics_owners_items?: Maybe<Delete_Many>;
  delete_clinics_practitioners_clinics_item?: Maybe<Delete_One>;
  delete_clinics_practitioners_clinics_items?: Maybe<Delete_Many>;
  delete_clinics_practitioners_item?: Maybe<Delete_One>;
  delete_clinics_practitioners_items?: Maybe<Delete_Many>;
  delete_content_creators_item?: Maybe<Delete_One>;
  delete_content_creators_items?: Maybe<Delete_Many>;
  delete_countries_item?: Maybe<Delete_One>;
  delete_countries_items?: Maybe<Delete_Many>;
  delete_faqs_item?: Maybe<Delete_One>;
  delete_faqs_items?: Maybe<Delete_Many>;
  delete_i18n_locales_item?: Maybe<Delete_One>;
  delete_i18n_locales_items?: Maybe<Delete_Many>;
  delete_invoices_item?: Maybe<Delete_One>;
  delete_invoices_items?: Maybe<Delete_Many>;
  delete_pages_item?: Maybe<Delete_One>;
  delete_pages_items?: Maybe<Delete_Many>;
  delete_posts_item?: Maybe<Delete_One>;
  delete_posts_items?: Maybe<Delete_Many>;
  delete_publishers_item?: Maybe<Delete_One>;
  delete_publishers_items?: Maybe<Delete_Many>;
  delete_redirects_item?: Maybe<Delete_One>;
  delete_redirects_items?: Maybe<Delete_Many>;
  delete_seopage_links_item?: Maybe<Delete_One>;
  delete_seopage_links_items?: Maybe<Delete_Many>;
  delete_sitemap_page_sections_item?: Maybe<Delete_One>;
  delete_sitemap_page_sections_items?: Maybe<Delete_Many>;
  delete_sitemap_pages_item?: Maybe<Delete_One>;
  delete_sitemap_pages_items?: Maybe<Delete_Many>;
  delete_sitemap_section_links_item?: Maybe<Delete_One>;
  delete_sitemap_section_links_items?: Maybe<Delete_Many>;
  delete_states_item?: Maybe<Delete_One>;
  delete_states_items?: Maybe<Delete_Many>;
  delete_suburbs_item?: Maybe<Delete_One>;
  delete_suburbs_items?: Maybe<Delete_Many>;
  delete_tokens_item?: Maybe<Delete_One>;
  delete_tokens_items?: Maybe<Delete_Many>;
  delete_upload_file_item?: Maybe<Delete_One>;
  delete_upload_file_items?: Maybe<Delete_Many>;
  delete_upload_file_morph_item?: Maybe<Delete_One>;
  delete_upload_file_morph_items?: Maybe<Delete_Many>;
  update_appointments_item?: Maybe<Appointments>;
  update_appointments_items?: Maybe<Array<Maybe<Appointments>>>;
  update_articles_content_creators_2_item?: Maybe<Articles_Content_Creators_2>;
  update_articles_content_creators_2_items?: Maybe<Array<Maybe<Articles_Content_Creators_2>>>;
  update_articles_content_creators_3_item?: Maybe<Articles_Content_Creators_3>;
  update_articles_content_creators_3_items?: Maybe<Array<Maybe<Articles_Content_Creators_3>>>;
  update_articles_content_creators_4_item?: Maybe<Articles_Content_Creators_4>;
  update_articles_content_creators_4_items?: Maybe<Array<Maybe<Articles_Content_Creators_4>>>;
  update_articles_item?: Maybe<Articles>;
  update_articles_items?: Maybe<Array<Maybe<Articles>>>;
  update_availability_pages_item?: Maybe<Availability_Pages>;
  update_availability_pages_items?: Maybe<Array<Maybe<Availability_Pages>>>;
  update_booking_pages_item?: Maybe<Booking_Pages>;
  update_booking_pages_items?: Maybe<Array<Maybe<Booking_Pages>>>;
  update_cities_item?: Maybe<Cities>;
  update_cities_items?: Maybe<Array<Maybe<Cities>>>;
  update_clinics_item?: Maybe<Clinics>;
  update_clinics_items?: Maybe<Array<Maybe<Clinics>>>;
  update_clinics_owners_item?: Maybe<Clinics_Owners>;
  update_clinics_owners_items?: Maybe<Array<Maybe<Clinics_Owners>>>;
  update_clinics_practitioners_clinics_item?: Maybe<Clinics_Practitioners_Clinics>;
  update_clinics_practitioners_clinics_items?: Maybe<Array<Maybe<Clinics_Practitioners_Clinics>>>;
  update_clinics_practitioners_item?: Maybe<Clinics_Practitioners>;
  update_clinics_practitioners_items?: Maybe<Array<Maybe<Clinics_Practitioners>>>;
  update_content_creators_item?: Maybe<Content_Creators>;
  update_content_creators_items?: Maybe<Array<Maybe<Content_Creators>>>;
  update_countries_item?: Maybe<Countries>;
  update_countries_items?: Maybe<Array<Maybe<Countries>>>;
  update_faqs_item?: Maybe<Faqs>;
  update_faqs_items?: Maybe<Array<Maybe<Faqs>>>;
  update_i18n_locales_item?: Maybe<I18n_Locales>;
  update_i18n_locales_items?: Maybe<Array<Maybe<I18n_Locales>>>;
  update_invoices_item?: Maybe<Invoices>;
  update_invoices_items?: Maybe<Array<Maybe<Invoices>>>;
  update_pages_item?: Maybe<Pages>;
  update_pages_items?: Maybe<Array<Maybe<Pages>>>;
  update_posts_item?: Maybe<Posts>;
  update_posts_items?: Maybe<Array<Maybe<Posts>>>;
  update_publishers_item?: Maybe<Publishers>;
  update_publishers_items?: Maybe<Array<Maybe<Publishers>>>;
  update_redirects_item?: Maybe<Redirects>;
  update_redirects_items?: Maybe<Array<Maybe<Redirects>>>;
  update_seopage_links_item?: Maybe<Seopage_Links>;
  update_seopage_links_items?: Maybe<Array<Maybe<Seopage_Links>>>;
  update_sitemap_page_sections_item?: Maybe<Sitemap_Page_Sections>;
  update_sitemap_page_sections_items?: Maybe<Array<Maybe<Sitemap_Page_Sections>>>;
  update_sitemap_pages_item?: Maybe<Sitemap_Pages>;
  update_sitemap_pages_items?: Maybe<Array<Maybe<Sitemap_Pages>>>;
  update_sitemap_section_links_item?: Maybe<Sitemap_Section_Links>;
  update_sitemap_section_links_items?: Maybe<Array<Maybe<Sitemap_Section_Links>>>;
  update_states_item?: Maybe<States>;
  update_states_items?: Maybe<Array<Maybe<States>>>;
  update_suburbs_item?: Maybe<Suburbs>;
  update_suburbs_items?: Maybe<Array<Maybe<Suburbs>>>;
  update_tokens_item?: Maybe<Tokens>;
  update_tokens_items?: Maybe<Array<Maybe<Tokens>>>;
  update_upload_file_item?: Maybe<Upload_File>;
  update_upload_file_items?: Maybe<Array<Maybe<Upload_File>>>;
  update_upload_file_morph_item?: Maybe<Upload_File_Morph>;
  update_upload_file_morph_items?: Maybe<Array<Maybe<Upload_File_Morph>>>;
};


export type MutationCreate_Appointments_ItemArgs = {
  data: Create_Appointments_Input;
};


export type MutationCreate_Appointments_ItemsArgs = {
  data?: InputMaybe<Array<Create_Appointments_Input>>;
  filter?: InputMaybe<Appointments_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Articles_Content_Creators_2_ItemArgs = {
  data: Create_Articles_Content_Creators_2_Input;
};


export type MutationCreate_Articles_Content_Creators_2_ItemsArgs = {
  data?: InputMaybe<Array<Create_Articles_Content_Creators_2_Input>>;
  filter?: InputMaybe<Articles_Content_Creators_2_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Articles_Content_Creators_3_ItemArgs = {
  data: Create_Articles_Content_Creators_3_Input;
};


export type MutationCreate_Articles_Content_Creators_3_ItemsArgs = {
  data?: InputMaybe<Array<Create_Articles_Content_Creators_3_Input>>;
  filter?: InputMaybe<Articles_Content_Creators_3_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Articles_Content_Creators_4_ItemArgs = {
  data: Create_Articles_Content_Creators_4_Input;
};


export type MutationCreate_Articles_Content_Creators_4_ItemsArgs = {
  data?: InputMaybe<Array<Create_Articles_Content_Creators_4_Input>>;
  filter?: InputMaybe<Articles_Content_Creators_4_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Articles_ItemArgs = {
  data: Create_Articles_Input;
};


export type MutationCreate_Articles_ItemsArgs = {
  data?: InputMaybe<Array<Create_Articles_Input>>;
  filter?: InputMaybe<Articles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Availability_Pages_ItemArgs = {
  data: Create_Availability_Pages_Input;
};


export type MutationCreate_Availability_Pages_ItemsArgs = {
  data?: InputMaybe<Array<Create_Availability_Pages_Input>>;
  filter?: InputMaybe<Availability_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Booking_Pages_ItemArgs = {
  data: Create_Booking_Pages_Input;
};


export type MutationCreate_Booking_Pages_ItemsArgs = {
  data?: InputMaybe<Array<Create_Booking_Pages_Input>>;
  filter?: InputMaybe<Booking_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Cities_ItemArgs = {
  data: Create_Cities_Input;
};


export type MutationCreate_Cities_ItemsArgs = {
  data?: InputMaybe<Array<Create_Cities_Input>>;
  filter?: InputMaybe<Cities_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Clinics_ItemArgs = {
  data: Create_Clinics_Input;
};


export type MutationCreate_Clinics_ItemsArgs = {
  data?: InputMaybe<Array<Create_Clinics_Input>>;
  filter?: InputMaybe<Clinics_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Clinics_Owners_ItemArgs = {
  data: Create_Clinics_Owners_Input;
};


export type MutationCreate_Clinics_Owners_ItemsArgs = {
  data?: InputMaybe<Array<Create_Clinics_Owners_Input>>;
  filter?: InputMaybe<Clinics_Owners_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Clinics_Practitioners_Clinics_ItemArgs = {
  data: Create_Clinics_Practitioners_Clinics_Input;
};


export type MutationCreate_Clinics_Practitioners_Clinics_ItemsArgs = {
  data?: InputMaybe<Array<Create_Clinics_Practitioners_Clinics_Input>>;
  filter?: InputMaybe<Clinics_Practitioners_Clinics_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Clinics_Practitioners_ItemArgs = {
  data: Create_Clinics_Practitioners_Input;
};


export type MutationCreate_Clinics_Practitioners_ItemsArgs = {
  data?: InputMaybe<Array<Create_Clinics_Practitioners_Input>>;
  filter?: InputMaybe<Clinics_Practitioners_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Content_Creators_ItemArgs = {
  data: Create_Content_Creators_Input;
};


export type MutationCreate_Content_Creators_ItemsArgs = {
  data?: InputMaybe<Array<Create_Content_Creators_Input>>;
  filter?: InputMaybe<Content_Creators_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Countries_ItemArgs = {
  data: Create_Countries_Input;
};


export type MutationCreate_Countries_ItemsArgs = {
  data?: InputMaybe<Array<Create_Countries_Input>>;
  filter?: InputMaybe<Countries_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Faqs_ItemArgs = {
  data: Create_Faqs_Input;
};


export type MutationCreate_Faqs_ItemsArgs = {
  data?: InputMaybe<Array<Create_Faqs_Input>>;
  filter?: InputMaybe<Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_I18n_Locales_ItemArgs = {
  data: Create_I18n_Locales_Input;
};


export type MutationCreate_I18n_Locales_ItemsArgs = {
  data?: InputMaybe<Array<Create_I18n_Locales_Input>>;
  filter?: InputMaybe<I18n_Locales_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Invoices_ItemArgs = {
  data: Create_Invoices_Input;
};


export type MutationCreate_Invoices_ItemsArgs = {
  data?: InputMaybe<Array<Create_Invoices_Input>>;
  filter?: InputMaybe<Invoices_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Pages_ItemArgs = {
  data: Create_Pages_Input;
};


export type MutationCreate_Pages_ItemsArgs = {
  data?: InputMaybe<Array<Create_Pages_Input>>;
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Posts_ItemArgs = {
  data: Create_Posts_Input;
};


export type MutationCreate_Posts_ItemsArgs = {
  data?: InputMaybe<Array<Create_Posts_Input>>;
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Publishers_ItemArgs = {
  data: Create_Publishers_Input;
};


export type MutationCreate_Publishers_ItemsArgs = {
  data?: InputMaybe<Array<Create_Publishers_Input>>;
  filter?: InputMaybe<Publishers_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Redirects_ItemArgs = {
  data: Create_Redirects_Input;
};


export type MutationCreate_Redirects_ItemsArgs = {
  data?: InputMaybe<Array<Create_Redirects_Input>>;
  filter?: InputMaybe<Redirects_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Seopage_Links_ItemArgs = {
  data: Create_Seopage_Links_Input;
};


export type MutationCreate_Seopage_Links_ItemsArgs = {
  data?: InputMaybe<Array<Create_Seopage_Links_Input>>;
  filter?: InputMaybe<Seopage_Links_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Sitemap_Page_Sections_ItemArgs = {
  data: Create_Sitemap_Page_Sections_Input;
};


export type MutationCreate_Sitemap_Page_Sections_ItemsArgs = {
  data?: InputMaybe<Array<Create_Sitemap_Page_Sections_Input>>;
  filter?: InputMaybe<Sitemap_Page_Sections_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Sitemap_Pages_ItemArgs = {
  data: Create_Sitemap_Pages_Input;
};


export type MutationCreate_Sitemap_Pages_ItemsArgs = {
  data?: InputMaybe<Array<Create_Sitemap_Pages_Input>>;
  filter?: InputMaybe<Sitemap_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Sitemap_Section_Links_ItemArgs = {
  data: Create_Sitemap_Section_Links_Input;
};


export type MutationCreate_Sitemap_Section_Links_ItemsArgs = {
  data?: InputMaybe<Array<Create_Sitemap_Section_Links_Input>>;
  filter?: InputMaybe<Sitemap_Section_Links_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_States_ItemArgs = {
  data: Create_States_Input;
};


export type MutationCreate_States_ItemsArgs = {
  data?: InputMaybe<Array<Create_States_Input>>;
  filter?: InputMaybe<States_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Suburbs_ItemArgs = {
  data: Create_Suburbs_Input;
};


export type MutationCreate_Suburbs_ItemsArgs = {
  data?: InputMaybe<Array<Create_Suburbs_Input>>;
  filter?: InputMaybe<Suburbs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Tokens_ItemArgs = {
  data: Create_Tokens_Input;
};


export type MutationCreate_Tokens_ItemsArgs = {
  data?: InputMaybe<Array<Create_Tokens_Input>>;
  filter?: InputMaybe<Tokens_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Upload_File_ItemArgs = {
  data: Create_Upload_File_Input;
};


export type MutationCreate_Upload_File_ItemsArgs = {
  data?: InputMaybe<Array<Create_Upload_File_Input>>;
  filter?: InputMaybe<Upload_File_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationCreate_Upload_File_Morph_ItemArgs = {
  data: Create_Upload_File_Morph_Input;
};


export type MutationCreate_Upload_File_Morph_ItemsArgs = {
  data?: InputMaybe<Array<Create_Upload_File_Morph_Input>>;
  filter?: InputMaybe<Upload_File_Morph_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationDelete_Appointments_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Appointments_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Articles_Content_Creators_2_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Articles_Content_Creators_2_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Articles_Content_Creators_3_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Articles_Content_Creators_3_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Articles_Content_Creators_4_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Articles_Content_Creators_4_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Articles_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Articles_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Availability_Pages_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Availability_Pages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Booking_Pages_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Booking_Pages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Cities_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Cities_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Clinics_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Clinics_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Clinics_Owners_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Clinics_Owners_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Clinics_Practitioners_Clinics_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Clinics_Practitioners_Clinics_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Clinics_Practitioners_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Clinics_Practitioners_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Content_Creators_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Content_Creators_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Countries_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Countries_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Faqs_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Faqs_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_I18n_Locales_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_I18n_Locales_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Invoices_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Invoices_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Pages_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Pages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Posts_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Posts_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Publishers_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Publishers_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Redirects_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Redirects_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Seopage_Links_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Seopage_Links_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Sitemap_Page_Sections_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Sitemap_Page_Sections_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Sitemap_Pages_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Sitemap_Pages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Sitemap_Section_Links_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Sitemap_Section_Links_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_States_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_States_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Suburbs_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Suburbs_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Tokens_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Tokens_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Upload_File_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Upload_File_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDelete_Upload_File_Morph_ItemArgs = {
  id: Scalars['ID'];
};


export type MutationDelete_Upload_File_Morph_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationUpdate_Appointments_ItemArgs = {
  data: Update_Appointments_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Appointments_ItemsArgs = {
  data: Update_Appointments_Input;
  filter?: InputMaybe<Appointments_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Articles_Content_Creators_2_ItemArgs = {
  data: Update_Articles_Content_Creators_2_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Articles_Content_Creators_2_ItemsArgs = {
  data: Update_Articles_Content_Creators_2_Input;
  filter?: InputMaybe<Articles_Content_Creators_2_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Articles_Content_Creators_3_ItemArgs = {
  data: Update_Articles_Content_Creators_3_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Articles_Content_Creators_3_ItemsArgs = {
  data: Update_Articles_Content_Creators_3_Input;
  filter?: InputMaybe<Articles_Content_Creators_3_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Articles_Content_Creators_4_ItemArgs = {
  data: Update_Articles_Content_Creators_4_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Articles_Content_Creators_4_ItemsArgs = {
  data: Update_Articles_Content_Creators_4_Input;
  filter?: InputMaybe<Articles_Content_Creators_4_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Articles_ItemArgs = {
  data: Update_Articles_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Articles_ItemsArgs = {
  data: Update_Articles_Input;
  filter?: InputMaybe<Articles_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Availability_Pages_ItemArgs = {
  data: Update_Availability_Pages_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Availability_Pages_ItemsArgs = {
  data: Update_Availability_Pages_Input;
  filter?: InputMaybe<Availability_Pages_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Booking_Pages_ItemArgs = {
  data: Update_Booking_Pages_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Booking_Pages_ItemsArgs = {
  data: Update_Booking_Pages_Input;
  filter?: InputMaybe<Booking_Pages_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Cities_ItemArgs = {
  data: Update_Cities_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Cities_ItemsArgs = {
  data: Update_Cities_Input;
  filter?: InputMaybe<Cities_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Clinics_ItemArgs = {
  data: Update_Clinics_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Clinics_ItemsArgs = {
  data: Update_Clinics_Input;
  filter?: InputMaybe<Clinics_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Clinics_Owners_ItemArgs = {
  data: Update_Clinics_Owners_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Clinics_Owners_ItemsArgs = {
  data: Update_Clinics_Owners_Input;
  filter?: InputMaybe<Clinics_Owners_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Clinics_Practitioners_Clinics_ItemArgs = {
  data: Update_Clinics_Practitioners_Clinics_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Clinics_Practitioners_Clinics_ItemsArgs = {
  data: Update_Clinics_Practitioners_Clinics_Input;
  filter?: InputMaybe<Clinics_Practitioners_Clinics_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Clinics_Practitioners_ItemArgs = {
  data: Update_Clinics_Practitioners_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Clinics_Practitioners_ItemsArgs = {
  data: Update_Clinics_Practitioners_Input;
  filter?: InputMaybe<Clinics_Practitioners_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Content_Creators_ItemArgs = {
  data: Update_Content_Creators_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Content_Creators_ItemsArgs = {
  data: Update_Content_Creators_Input;
  filter?: InputMaybe<Content_Creators_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Countries_ItemArgs = {
  data: Update_Countries_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Countries_ItemsArgs = {
  data: Update_Countries_Input;
  filter?: InputMaybe<Countries_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Faqs_ItemArgs = {
  data: Update_Faqs_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Faqs_ItemsArgs = {
  data: Update_Faqs_Input;
  filter?: InputMaybe<Faqs_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_I18n_Locales_ItemArgs = {
  data: Update_I18n_Locales_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_I18n_Locales_ItemsArgs = {
  data: Update_I18n_Locales_Input;
  filter?: InputMaybe<I18n_Locales_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Invoices_ItemArgs = {
  data: Update_Invoices_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Invoices_ItemsArgs = {
  data: Update_Invoices_Input;
  filter?: InputMaybe<Invoices_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Pages_ItemArgs = {
  data: Update_Pages_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Pages_ItemsArgs = {
  data: Update_Pages_Input;
  filter?: InputMaybe<Pages_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Posts_ItemArgs = {
  data: Update_Posts_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Posts_ItemsArgs = {
  data: Update_Posts_Input;
  filter?: InputMaybe<Posts_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Publishers_ItemArgs = {
  data: Update_Publishers_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Publishers_ItemsArgs = {
  data: Update_Publishers_Input;
  filter?: InputMaybe<Publishers_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Redirects_ItemArgs = {
  data: Update_Redirects_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Redirects_ItemsArgs = {
  data: Update_Redirects_Input;
  filter?: InputMaybe<Redirects_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Seopage_Links_ItemArgs = {
  data: Update_Seopage_Links_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Seopage_Links_ItemsArgs = {
  data: Update_Seopage_Links_Input;
  filter?: InputMaybe<Seopage_Links_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Sitemap_Page_Sections_ItemArgs = {
  data: Update_Sitemap_Page_Sections_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Sitemap_Page_Sections_ItemsArgs = {
  data: Update_Sitemap_Page_Sections_Input;
  filter?: InputMaybe<Sitemap_Page_Sections_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Sitemap_Pages_ItemArgs = {
  data: Update_Sitemap_Pages_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Sitemap_Pages_ItemsArgs = {
  data: Update_Sitemap_Pages_Input;
  filter?: InputMaybe<Sitemap_Pages_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Sitemap_Section_Links_ItemArgs = {
  data: Update_Sitemap_Section_Links_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Sitemap_Section_Links_ItemsArgs = {
  data: Update_Sitemap_Section_Links_Input;
  filter?: InputMaybe<Sitemap_Section_Links_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_States_ItemArgs = {
  data: Update_States_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_States_ItemsArgs = {
  data: Update_States_Input;
  filter?: InputMaybe<States_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Suburbs_ItemArgs = {
  data: Update_Suburbs_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Suburbs_ItemsArgs = {
  data: Update_Suburbs_Input;
  filter?: InputMaybe<Suburbs_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Tokens_ItemArgs = {
  data: Update_Tokens_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Tokens_ItemsArgs = {
  data: Update_Tokens_Input;
  filter?: InputMaybe<Tokens_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Upload_File_ItemArgs = {
  data: Update_Upload_File_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Upload_File_ItemsArgs = {
  data: Update_Upload_File_Input;
  filter?: InputMaybe<Upload_File_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MutationUpdate_Upload_File_Morph_ItemArgs = {
  data: Update_Upload_File_Morph_Input;
  id: Scalars['ID'];
};


export type MutationUpdate_Upload_File_Morph_ItemsArgs = {
  data: Update_Upload_File_Morph_Input;
  filter?: InputMaybe<Upload_File_Morph_Filter>;
  ids: Array<InputMaybe<Scalars['ID']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  appointments?: Maybe<Array<Maybe<Appointments>>>;
  appointments_aggregated?: Maybe<Array<Maybe<Appointments_Aggregated>>>;
  appointments_by_id?: Maybe<Appointments>;
  articles?: Maybe<Array<Maybe<Articles>>>;
  articles_aggregated?: Maybe<Array<Maybe<Articles_Aggregated>>>;
  articles_by_id?: Maybe<Articles>;
  articles_content_creators_2?: Maybe<Array<Maybe<Articles_Content_Creators_2>>>;
  articles_content_creators_2_aggregated?: Maybe<Array<Maybe<Articles_Content_Creators_2_Aggregated>>>;
  articles_content_creators_2_by_id?: Maybe<Articles_Content_Creators_2>;
  articles_content_creators_3?: Maybe<Array<Maybe<Articles_Content_Creators_3>>>;
  articles_content_creators_3_aggregated?: Maybe<Array<Maybe<Articles_Content_Creators_3_Aggregated>>>;
  articles_content_creators_3_by_id?: Maybe<Articles_Content_Creators_3>;
  articles_content_creators_4?: Maybe<Array<Maybe<Articles_Content_Creators_4>>>;
  articles_content_creators_4_aggregated?: Maybe<Array<Maybe<Articles_Content_Creators_4_Aggregated>>>;
  articles_content_creators_4_by_id?: Maybe<Articles_Content_Creators_4>;
  availability_pages?: Maybe<Array<Maybe<Availability_Pages>>>;
  availability_pages_aggregated?: Maybe<Array<Maybe<Availability_Pages_Aggregated>>>;
  availability_pages_by_id?: Maybe<Availability_Pages>;
  booking_pages?: Maybe<Array<Maybe<Booking_Pages>>>;
  booking_pages_aggregated?: Maybe<Array<Maybe<Booking_Pages_Aggregated>>>;
  booking_pages_by_id?: Maybe<Booking_Pages>;
  cities?: Maybe<Array<Maybe<Cities>>>;
  cities_aggregated?: Maybe<Array<Maybe<Cities_Aggregated>>>;
  cities_by_id?: Maybe<Cities>;
  clinics?: Maybe<Array<Maybe<Clinics>>>;
  clinics_aggregated?: Maybe<Array<Maybe<Clinics_Aggregated>>>;
  clinics_by_id?: Maybe<Clinics>;
  clinics_owners?: Maybe<Array<Maybe<Clinics_Owners>>>;
  clinics_owners_aggregated?: Maybe<Array<Maybe<Clinics_Owners_Aggregated>>>;
  clinics_owners_by_id?: Maybe<Clinics_Owners>;
  clinics_practitioners?: Maybe<Array<Maybe<Clinics_Practitioners>>>;
  clinics_practitioners_aggregated?: Maybe<Array<Maybe<Clinics_Practitioners_Aggregated>>>;
  clinics_practitioners_by_id?: Maybe<Clinics_Practitioners>;
  clinics_practitioners_clinics?: Maybe<Array<Maybe<Clinics_Practitioners_Clinics>>>;
  clinics_practitioners_clinics_aggregated?: Maybe<Array<Maybe<Clinics_Practitioners_Clinics_Aggregated>>>;
  clinics_practitioners_clinics_by_id?: Maybe<Clinics_Practitioners_Clinics>;
  content_creators?: Maybe<Array<Maybe<Content_Creators>>>;
  content_creators_aggregated?: Maybe<Array<Maybe<Content_Creators_Aggregated>>>;
  content_creators_by_id?: Maybe<Content_Creators>;
  countries?: Maybe<Array<Maybe<Countries>>>;
  countries_aggregated?: Maybe<Array<Maybe<Countries_Aggregated>>>;
  countries_by_id?: Maybe<Countries>;
  faqs?: Maybe<Array<Maybe<Faqs>>>;
  faqs_aggregated?: Maybe<Array<Maybe<Faqs_Aggregated>>>;
  faqs_by_id?: Maybe<Faqs>;
  i18n_locales?: Maybe<Array<Maybe<I18n_Locales>>>;
  i18n_locales_aggregated?: Maybe<Array<Maybe<I18n_Locales_Aggregated>>>;
  i18n_locales_by_id?: Maybe<I18n_Locales>;
  invoices?: Maybe<Array<Maybe<Invoices>>>;
  invoices_aggregated?: Maybe<Array<Maybe<Invoices_Aggregated>>>;
  invoices_by_id?: Maybe<Invoices>;
  pages?: Maybe<Array<Maybe<Pages>>>;
  pages_aggregated?: Maybe<Array<Maybe<Pages_Aggregated>>>;
  pages_by_id?: Maybe<Pages>;
  posts?: Maybe<Array<Maybe<Posts>>>;
  posts_aggregated?: Maybe<Array<Maybe<Posts_Aggregated>>>;
  posts_by_id?: Maybe<Posts>;
  publishers?: Maybe<Array<Maybe<Publishers>>>;
  publishers_aggregated?: Maybe<Array<Maybe<Publishers_Aggregated>>>;
  publishers_by_id?: Maybe<Publishers>;
  redirects?: Maybe<Array<Maybe<Redirects>>>;
  redirects_aggregated?: Maybe<Array<Maybe<Redirects_Aggregated>>>;
  redirects_by_id?: Maybe<Redirects>;
  seopage_links?: Maybe<Array<Maybe<Seopage_Links>>>;
  seopage_links_aggregated?: Maybe<Array<Maybe<Seopage_Links_Aggregated>>>;
  seopage_links_by_id?: Maybe<Seopage_Links>;
  sitemap_page_sections?: Maybe<Array<Maybe<Sitemap_Page_Sections>>>;
  sitemap_page_sections_aggregated?: Maybe<Array<Maybe<Sitemap_Page_Sections_Aggregated>>>;
  sitemap_page_sections_by_id?: Maybe<Sitemap_Page_Sections>;
  sitemap_pages?: Maybe<Array<Maybe<Sitemap_Pages>>>;
  sitemap_pages_aggregated?: Maybe<Array<Maybe<Sitemap_Pages_Aggregated>>>;
  sitemap_pages_by_id?: Maybe<Sitemap_Pages>;
  sitemap_section_links?: Maybe<Array<Maybe<Sitemap_Section_Links>>>;
  sitemap_section_links_aggregated?: Maybe<Array<Maybe<Sitemap_Section_Links_Aggregated>>>;
  sitemap_section_links_by_id?: Maybe<Sitemap_Section_Links>;
  states?: Maybe<Array<Maybe<States>>>;
  states_aggregated?: Maybe<Array<Maybe<States_Aggregated>>>;
  states_by_id?: Maybe<States>;
  suburbs?: Maybe<Array<Maybe<Suburbs>>>;
  suburbs_aggregated?: Maybe<Array<Maybe<Suburbs_Aggregated>>>;
  suburbs_by_id?: Maybe<Suburbs>;
  tokens?: Maybe<Array<Maybe<Tokens>>>;
  tokens_aggregated?: Maybe<Array<Maybe<Tokens_Aggregated>>>;
  tokens_by_id?: Maybe<Tokens>;
  upload_file?: Maybe<Array<Maybe<Upload_File>>>;
  upload_file_aggregated?: Maybe<Array<Maybe<Upload_File_Aggregated>>>;
  upload_file_by_id?: Maybe<Upload_File>;
  upload_file_morph?: Maybe<Array<Maybe<Upload_File_Morph>>>;
  upload_file_morph_aggregated?: Maybe<Array<Maybe<Upload_File_Morph_Aggregated>>>;
  upload_file_morph_by_id?: Maybe<Upload_File_Morph>;
};


export type QueryAppointmentsArgs = {
  filter?: InputMaybe<Appointments_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAppointments_AggregatedArgs = {
  filter?: InputMaybe<Appointments_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAppointments_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryArticlesArgs = {
  filter?: InputMaybe<Articles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryArticles_AggregatedArgs = {
  filter?: InputMaybe<Articles_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryArticles_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryArticles_Content_Creators_2Args = {
  filter?: InputMaybe<Articles_Content_Creators_2_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryArticles_Content_Creators_2_AggregatedArgs = {
  filter?: InputMaybe<Articles_Content_Creators_2_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryArticles_Content_Creators_2_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryArticles_Content_Creators_3Args = {
  filter?: InputMaybe<Articles_Content_Creators_3_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryArticles_Content_Creators_3_AggregatedArgs = {
  filter?: InputMaybe<Articles_Content_Creators_3_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryArticles_Content_Creators_3_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryArticles_Content_Creators_4Args = {
  filter?: InputMaybe<Articles_Content_Creators_4_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryArticles_Content_Creators_4_AggregatedArgs = {
  filter?: InputMaybe<Articles_Content_Creators_4_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryArticles_Content_Creators_4_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryAvailability_PagesArgs = {
  filter?: InputMaybe<Availability_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAvailability_Pages_AggregatedArgs = {
  filter?: InputMaybe<Availability_Pages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAvailability_Pages_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryBooking_PagesArgs = {
  filter?: InputMaybe<Booking_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBooking_Pages_AggregatedArgs = {
  filter?: InputMaybe<Booking_Pages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBooking_Pages_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryCitiesArgs = {
  filter?: InputMaybe<Cities_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCities_AggregatedArgs = {
  filter?: InputMaybe<Cities_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCities_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryClinicsArgs = {
  filter?: InputMaybe<Clinics_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryClinics_AggregatedArgs = {
  filter?: InputMaybe<Clinics_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryClinics_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryClinics_OwnersArgs = {
  filter?: InputMaybe<Clinics_Owners_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryClinics_Owners_AggregatedArgs = {
  filter?: InputMaybe<Clinics_Owners_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryClinics_Owners_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryClinics_PractitionersArgs = {
  filter?: InputMaybe<Clinics_Practitioners_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryClinics_Practitioners_AggregatedArgs = {
  filter?: InputMaybe<Clinics_Practitioners_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryClinics_Practitioners_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryClinics_Practitioners_ClinicsArgs = {
  filter?: InputMaybe<Clinics_Practitioners_Clinics_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryClinics_Practitioners_Clinics_AggregatedArgs = {
  filter?: InputMaybe<Clinics_Practitioners_Clinics_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryClinics_Practitioners_Clinics_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryContent_CreatorsArgs = {
  filter?: InputMaybe<Content_Creators_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContent_Creators_AggregatedArgs = {
  filter?: InputMaybe<Content_Creators_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContent_Creators_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryCountriesArgs = {
  filter?: InputMaybe<Countries_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCountries_AggregatedArgs = {
  filter?: InputMaybe<Countries_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCountries_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryFaqsArgs = {
  filter?: InputMaybe<Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFaqs_AggregatedArgs = {
  filter?: InputMaybe<Faqs_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFaqs_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryI18n_LocalesArgs = {
  filter?: InputMaybe<I18n_Locales_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18n_Locales_AggregatedArgs = {
  filter?: InputMaybe<I18n_Locales_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18n_Locales_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryInvoicesArgs = {
  filter?: InputMaybe<Invoices_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryInvoices_AggregatedArgs = {
  filter?: InputMaybe<Invoices_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryInvoices_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryPagesArgs = {
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPages_AggregatedArgs = {
  filter?: InputMaybe<Pages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPages_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryPostsArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPosts_AggregatedArgs = {
  filter?: InputMaybe<Posts_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPosts_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryPublishersArgs = {
  filter?: InputMaybe<Publishers_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPublishers_AggregatedArgs = {
  filter?: InputMaybe<Publishers_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPublishers_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryRedirectsArgs = {
  filter?: InputMaybe<Redirects_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRedirects_AggregatedArgs = {
  filter?: InputMaybe<Redirects_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryRedirects_By_IdArgs = {
  id: Scalars['ID'];
};


export type QuerySeopage_LinksArgs = {
  filter?: InputMaybe<Seopage_Links_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySeopage_Links_AggregatedArgs = {
  filter?: InputMaybe<Seopage_Links_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySeopage_Links_By_IdArgs = {
  id: Scalars['ID'];
};


export type QuerySitemap_Page_SectionsArgs = {
  filter?: InputMaybe<Sitemap_Page_Sections_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySitemap_Page_Sections_AggregatedArgs = {
  filter?: InputMaybe<Sitemap_Page_Sections_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySitemap_Page_Sections_By_IdArgs = {
  id: Scalars['ID'];
};


export type QuerySitemap_PagesArgs = {
  filter?: InputMaybe<Sitemap_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySitemap_Pages_AggregatedArgs = {
  filter?: InputMaybe<Sitemap_Pages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySitemap_Pages_By_IdArgs = {
  id: Scalars['ID'];
};


export type QuerySitemap_Section_LinksArgs = {
  filter?: InputMaybe<Sitemap_Section_Links_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySitemap_Section_Links_AggregatedArgs = {
  filter?: InputMaybe<Sitemap_Section_Links_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySitemap_Section_Links_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryStatesArgs = {
  filter?: InputMaybe<States_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStates_AggregatedArgs = {
  filter?: InputMaybe<States_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStates_By_IdArgs = {
  id: Scalars['ID'];
};


export type QuerySuburbsArgs = {
  filter?: InputMaybe<Suburbs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySuburbs_AggregatedArgs = {
  filter?: InputMaybe<Suburbs_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySuburbs_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryTokensArgs = {
  filter?: InputMaybe<Tokens_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTokens_AggregatedArgs = {
  filter?: InputMaybe<Tokens_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTokens_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryUpload_FileArgs = {
  filter?: InputMaybe<Upload_File_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUpload_File_AggregatedArgs = {
  filter?: InputMaybe<Upload_File_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUpload_File_By_IdArgs = {
  id: Scalars['ID'];
};


export type QueryUpload_File_MorphArgs = {
  filter?: InputMaybe<Upload_File_Morph_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUpload_File_Morph_AggregatedArgs = {
  filter?: InputMaybe<Upload_File_Morph_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUpload_File_Morph_By_IdArgs = {
  id: Scalars['ID'];
};

export type Appointments = {
  __typename?: 'appointments';
  cancelled?: Maybe<Scalars['String']>;
  clinic?: Maybe<Clinics>;
  created_at?: Maybe<Scalars['Date']>;
  created_at_func?: Maybe<Datetime_Functions>;
  created_by?: Maybe<Scalars['Int']>;
  did_not_arrive?: Maybe<Scalars['Boolean']>;
  ends_at?: Maybe<Scalars['Date']>;
  ends_at_func?: Maybe<Datetime_Functions>;
  existing_patient?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  patient: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  provider_data?: Maybe<Scalars['String']>;
  starts_at?: Maybe<Scalars['Date']>;
  starts_at_func?: Maybe<Datetime_Functions>;
  updated_at?: Maybe<Scalars['Date']>;
  updated_at_func?: Maybe<Datetime_Functions>;
  updated_by?: Maybe<Scalars['Int']>;
};


export type AppointmentsClinicArgs = {
  filter?: InputMaybe<Clinics_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Appointments_Aggregated = {
  __typename?: 'appointments_aggregated';
  avg?: Maybe<Appointments_Aggregated_Fields>;
  avgDistinct?: Maybe<Appointments_Aggregated_Fields>;
  count?: Maybe<Appointments_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Appointments_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Appointments_Aggregated_Fields>;
  min?: Maybe<Appointments_Aggregated_Fields>;
  sum?: Maybe<Appointments_Aggregated_Fields>;
  sumDistinct?: Maybe<Appointments_Aggregated_Fields>;
};

export type Appointments_Aggregated_Count = {
  __typename?: 'appointments_aggregated_count';
  cancelled?: Maybe<Scalars['Int']>;
  clinic?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  did_not_arrive?: Maybe<Scalars['Int']>;
  ends_at?: Maybe<Scalars['Int']>;
  existing_patient?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  patient?: Maybe<Scalars['Int']>;
  provider?: Maybe<Scalars['Int']>;
  provider_data?: Maybe<Scalars['Int']>;
  starts_at?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

export type Appointments_Aggregated_Fields = {
  __typename?: 'appointments_aggregated_fields';
  clinic?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

export type Appointments_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Appointments_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Appointments_Filter>>>;
  cancelled?: InputMaybe<String_Filter_Operators>;
  clinic?: InputMaybe<Clinics_Filter>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  created_by?: InputMaybe<Number_Filter_Operators>;
  did_not_arrive?: InputMaybe<Boolean_Filter_Operators>;
  ends_at?: InputMaybe<Date_Filter_Operators>;
  ends_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  existing_patient?: InputMaybe<Boolean_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  patient?: InputMaybe<String_Filter_Operators>;
  provider?: InputMaybe<String_Filter_Operators>;
  provider_data?: InputMaybe<String_Filter_Operators>;
  starts_at?: InputMaybe<Date_Filter_Operators>;
  starts_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  updated_by?: InputMaybe<Number_Filter_Operators>;
};

export type Articles = {
  __typename?: 'articles';
  anchor_sitemap?: Maybe<Sitemap_Section_Links>;
  audience?: Maybe<Scalars['JSON']>;
  audience_func?: Maybe<Count_Functions>;
  authors?: Maybe<Array<Maybe<Articles_Content_Creators_2>>>;
  authors_func?: Maybe<Count_Functions>;
  autoupdate_anchor?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Scalars['JSON']>;
  categories_func?: Maybe<Count_Functions>;
  citations?: Maybe<Scalars['JSON']>;
  citations_func?: Maybe<Count_Functions>;
  content?: Maybe<Scalars['String']>;
  contributed_at?: Maybe<Scalars['Date']>;
  contributed_at_func?: Maybe<Datetime_Functions>;
  contributors?: Maybe<Array<Maybe<Articles_Content_Creators_4>>>;
  contributors_func?: Maybe<Count_Functions>;
  created_at?: Maybe<Scalars['Date']>;
  created_at_func?: Maybe<Datetime_Functions>;
  created_by?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Directus_Files>;
  image_alt_text?: Maybe<Scalars['String']>;
  is_archived: Scalars['Boolean'];
  keywords?: Maybe<Scalars['JSON']>;
  keywords_func?: Maybe<Count_Functions>;
  last_reviewed?: Maybe<Scalars['Date']>;
  last_reviewed_func?: Maybe<Datetime_Functions>;
  markup_schema?: Maybe<Scalars['JSON']>;
  markup_schema_func?: Maybe<Count_Functions>;
  meta_description?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  publisher?: Maybe<Publishers>;
  reviewers?: Maybe<Array<Maybe<Articles_Content_Creators_3>>>;
  reviewers_func?: Maybe<Count_Functions>;
  slug?: Maybe<Scalars['String']>;
  sub_heading?: Maybe<Scalars['String']>;
  table_of_contents?: Maybe<Scalars['JSON']>;
  table_of_contents_func?: Maybe<Count_Functions>;
  updated_at?: Maybe<Scalars['Date']>;
  updated_at_func?: Maybe<Datetime_Functions>;
  updated_by?: Maybe<Scalars['Int']>;
};


export type ArticlesAnchor_SitemapArgs = {
  filter?: InputMaybe<Sitemap_Section_Links_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ArticlesAuthorsArgs = {
  filter?: InputMaybe<Articles_Content_Creators_2_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ArticlesContributorsArgs = {
  filter?: InputMaybe<Articles_Content_Creators_4_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ArticlesImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ArticlesPublisherArgs = {
  filter?: InputMaybe<Publishers_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ArticlesReviewersArgs = {
  filter?: InputMaybe<Articles_Content_Creators_3_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Articles_Aggregated = {
  __typename?: 'articles_aggregated';
  avg?: Maybe<Articles_Aggregated_Fields>;
  avgDistinct?: Maybe<Articles_Aggregated_Fields>;
  count?: Maybe<Articles_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Articles_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Articles_Aggregated_Fields>;
  min?: Maybe<Articles_Aggregated_Fields>;
  sum?: Maybe<Articles_Aggregated_Fields>;
  sumDistinct?: Maybe<Articles_Aggregated_Fields>;
};

export type Articles_Aggregated_Count = {
  __typename?: 'articles_aggregated_count';
  anchor_sitemap?: Maybe<Scalars['Int']>;
  audience?: Maybe<Scalars['Int']>;
  authors?: Maybe<Scalars['Int']>;
  autoupdate_anchor?: Maybe<Scalars['Int']>;
  categories?: Maybe<Scalars['Int']>;
  citations?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['Int']>;
  contributed_at?: Maybe<Scalars['Int']>;
  contributors?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['Int']>;
  image_alt_text?: Maybe<Scalars['Int']>;
  is_archived?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Scalars['Int']>;
  last_reviewed?: Maybe<Scalars['Int']>;
  markup_schema?: Maybe<Scalars['Int']>;
  meta_description?: Maybe<Scalars['Int']>;
  meta_title?: Maybe<Scalars['Int']>;
  publisher?: Maybe<Scalars['Int']>;
  reviewers?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  sub_heading?: Maybe<Scalars['Int']>;
  table_of_contents?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

export type Articles_Aggregated_Fields = {
  __typename?: 'articles_aggregated_fields';
  anchor_sitemap?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  publisher?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

export type Articles_Content_Creators_2 = {
  __typename?: 'articles_content_creators_2';
  articles_id?: Maybe<Articles>;
  content_creators_id?: Maybe<Content_Creators>;
  id?: Maybe<Scalars['ID']>;
};


export type Articles_Content_Creators_2Articles_IdArgs = {
  filter?: InputMaybe<Articles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Articles_Content_Creators_2Content_Creators_IdArgs = {
  filter?: InputMaybe<Content_Creators_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Articles_Content_Creators_2_Aggregated = {
  __typename?: 'articles_content_creators_2_aggregated';
  avg?: Maybe<Articles_Content_Creators_2_Aggregated_Fields>;
  avgDistinct?: Maybe<Articles_Content_Creators_2_Aggregated_Fields>;
  count?: Maybe<Articles_Content_Creators_2_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Articles_Content_Creators_2_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Articles_Content_Creators_2_Aggregated_Fields>;
  min?: Maybe<Articles_Content_Creators_2_Aggregated_Fields>;
  sum?: Maybe<Articles_Content_Creators_2_Aggregated_Fields>;
  sumDistinct?: Maybe<Articles_Content_Creators_2_Aggregated_Fields>;
};

export type Articles_Content_Creators_2_Aggregated_Count = {
  __typename?: 'articles_content_creators_2_aggregated_count';
  articles_id?: Maybe<Scalars['Int']>;
  content_creators_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Articles_Content_Creators_2_Aggregated_Fields = {
  __typename?: 'articles_content_creators_2_aggregated_fields';
  articles_id?: Maybe<Scalars['Float']>;
  content_creators_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Articles_Content_Creators_2_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Articles_Content_Creators_2_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Articles_Content_Creators_2_Filter>>>;
  articles_id?: InputMaybe<Articles_Filter>;
  content_creators_id?: InputMaybe<Content_Creators_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Articles_Content_Creators_3 = {
  __typename?: 'articles_content_creators_3';
  articles_id?: Maybe<Articles>;
  content_creators_id?: Maybe<Content_Creators>;
  id?: Maybe<Scalars['ID']>;
};


export type Articles_Content_Creators_3Articles_IdArgs = {
  filter?: InputMaybe<Articles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Articles_Content_Creators_3Content_Creators_IdArgs = {
  filter?: InputMaybe<Content_Creators_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Articles_Content_Creators_3_Aggregated = {
  __typename?: 'articles_content_creators_3_aggregated';
  avg?: Maybe<Articles_Content_Creators_3_Aggregated_Fields>;
  avgDistinct?: Maybe<Articles_Content_Creators_3_Aggregated_Fields>;
  count?: Maybe<Articles_Content_Creators_3_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Articles_Content_Creators_3_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Articles_Content_Creators_3_Aggregated_Fields>;
  min?: Maybe<Articles_Content_Creators_3_Aggregated_Fields>;
  sum?: Maybe<Articles_Content_Creators_3_Aggregated_Fields>;
  sumDistinct?: Maybe<Articles_Content_Creators_3_Aggregated_Fields>;
};

export type Articles_Content_Creators_3_Aggregated_Count = {
  __typename?: 'articles_content_creators_3_aggregated_count';
  articles_id?: Maybe<Scalars['Int']>;
  content_creators_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Articles_Content_Creators_3_Aggregated_Fields = {
  __typename?: 'articles_content_creators_3_aggregated_fields';
  articles_id?: Maybe<Scalars['Float']>;
  content_creators_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Articles_Content_Creators_3_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Articles_Content_Creators_3_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Articles_Content_Creators_3_Filter>>>;
  articles_id?: InputMaybe<Articles_Filter>;
  content_creators_id?: InputMaybe<Content_Creators_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Articles_Content_Creators_4 = {
  __typename?: 'articles_content_creators_4';
  articles_id?: Maybe<Articles>;
  content_creators_id?: Maybe<Content_Creators>;
  id?: Maybe<Scalars['ID']>;
};


export type Articles_Content_Creators_4Articles_IdArgs = {
  filter?: InputMaybe<Articles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Articles_Content_Creators_4Content_Creators_IdArgs = {
  filter?: InputMaybe<Content_Creators_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Articles_Content_Creators_4_Aggregated = {
  __typename?: 'articles_content_creators_4_aggregated';
  avg?: Maybe<Articles_Content_Creators_4_Aggregated_Fields>;
  avgDistinct?: Maybe<Articles_Content_Creators_4_Aggregated_Fields>;
  count?: Maybe<Articles_Content_Creators_4_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Articles_Content_Creators_4_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Articles_Content_Creators_4_Aggregated_Fields>;
  min?: Maybe<Articles_Content_Creators_4_Aggregated_Fields>;
  sum?: Maybe<Articles_Content_Creators_4_Aggregated_Fields>;
  sumDistinct?: Maybe<Articles_Content_Creators_4_Aggregated_Fields>;
};

export type Articles_Content_Creators_4_Aggregated_Count = {
  __typename?: 'articles_content_creators_4_aggregated_count';
  articles_id?: Maybe<Scalars['Int']>;
  content_creators_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Articles_Content_Creators_4_Aggregated_Fields = {
  __typename?: 'articles_content_creators_4_aggregated_fields';
  articles_id?: Maybe<Scalars['Float']>;
  content_creators_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Articles_Content_Creators_4_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Articles_Content_Creators_4_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Articles_Content_Creators_4_Filter>>>;
  articles_id?: InputMaybe<Articles_Filter>;
  content_creators_id?: InputMaybe<Content_Creators_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Articles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Articles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Articles_Filter>>>;
  anchor_sitemap?: InputMaybe<Sitemap_Section_Links_Filter>;
  audience?: InputMaybe<String_Filter_Operators>;
  audience_func?: InputMaybe<Count_Function_Filter_Operators>;
  authors?: InputMaybe<Articles_Content_Creators_2_Filter>;
  authors_func?: InputMaybe<Count_Function_Filter_Operators>;
  autoupdate_anchor?: InputMaybe<Boolean_Filter_Operators>;
  categories?: InputMaybe<String_Filter_Operators>;
  categories_func?: InputMaybe<Count_Function_Filter_Operators>;
  citations?: InputMaybe<String_Filter_Operators>;
  citations_func?: InputMaybe<Count_Function_Filter_Operators>;
  content?: InputMaybe<String_Filter_Operators>;
  contributed_at?: InputMaybe<Date_Filter_Operators>;
  contributed_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  contributors?: InputMaybe<Articles_Content_Creators_4_Filter>;
  contributors_func?: InputMaybe<Count_Function_Filter_Operators>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  created_by?: InputMaybe<Number_Filter_Operators>;
  heading?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  image?: InputMaybe<Directus_Files_Filter>;
  image_alt_text?: InputMaybe<String_Filter_Operators>;
  is_archived?: InputMaybe<Boolean_Filter_Operators>;
  keywords?: InputMaybe<String_Filter_Operators>;
  keywords_func?: InputMaybe<Count_Function_Filter_Operators>;
  last_reviewed?: InputMaybe<Date_Filter_Operators>;
  last_reviewed_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  markup_schema?: InputMaybe<String_Filter_Operators>;
  markup_schema_func?: InputMaybe<Count_Function_Filter_Operators>;
  meta_description?: InputMaybe<String_Filter_Operators>;
  meta_title?: InputMaybe<String_Filter_Operators>;
  publisher?: InputMaybe<Publishers_Filter>;
  reviewers?: InputMaybe<Articles_Content_Creators_3_Filter>;
  reviewers_func?: InputMaybe<Count_Function_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sub_heading?: InputMaybe<String_Filter_Operators>;
  table_of_contents?: InputMaybe<String_Filter_Operators>;
  table_of_contents_func?: InputMaybe<Count_Function_Filter_Operators>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  updated_by?: InputMaybe<Number_Filter_Operators>;
};

export type Availability_Pages = {
  __typename?: 'availability_pages';
  FAQs?: Maybe<Array<Maybe<Faqs>>>;
  FAQs_func?: Maybe<Count_Functions>;
  about_bookphysio?: Maybe<Scalars['String']>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  is_archived?: Maybe<Scalars['Boolean']>;
  popular_links?: Maybe<Array<Maybe<Sitemap_Section_Links>>>;
  popular_links_func?: Maybe<Count_Functions>;
  posts?: Maybe<Array<Maybe<Posts>>>;
  posts_func?: Maybe<Count_Functions>;
  slug?: Maybe<Scalars['String']>;
};


export type Availability_PagesFaQsArgs = {
  filter?: InputMaybe<Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Availability_PagesPopular_LinksArgs = {
  filter?: InputMaybe<Sitemap_Section_Links_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Availability_PagesPostsArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Availability_Pages_Aggregated = {
  __typename?: 'availability_pages_aggregated';
  avg?: Maybe<Availability_Pages_Aggregated_Fields>;
  avgDistinct?: Maybe<Availability_Pages_Aggregated_Fields>;
  count?: Maybe<Availability_Pages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Availability_Pages_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Availability_Pages_Aggregated_Fields>;
  min?: Maybe<Availability_Pages_Aggregated_Fields>;
  sum?: Maybe<Availability_Pages_Aggregated_Fields>;
  sumDistinct?: Maybe<Availability_Pages_Aggregated_Fields>;
};

export type Availability_Pages_Aggregated_Count = {
  __typename?: 'availability_pages_aggregated_count';
  FAQs?: Maybe<Scalars['Int']>;
  about_bookphysio?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_archived?: Maybe<Scalars['Int']>;
  popular_links?: Maybe<Scalars['Int']>;
  posts?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
};

export type Availability_Pages_Aggregated_Fields = {
  __typename?: 'availability_pages_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Availability_Pages_Filter = {
  FAQs?: InputMaybe<Faqs_Filter>;
  FAQs_func?: InputMaybe<Count_Function_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<Availability_Pages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Availability_Pages_Filter>>>;
  about_bookphysio?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  is_archived?: InputMaybe<Boolean_Filter_Operators>;
  popular_links?: InputMaybe<Sitemap_Section_Links_Filter>;
  popular_links_func?: InputMaybe<Count_Function_Filter_Operators>;
  posts?: InputMaybe<Posts_Filter>;
  posts_func?: InputMaybe<Count_Function_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
};

export type Booking_Pages = {
  __typename?: 'booking_pages';
  FAQs?: Maybe<Array<Maybe<Faqs>>>;
  FAQs_func?: Maybe<Count_Functions>;
  Seo_page_links?: Maybe<Array<Maybe<Seopage_Links>>>;
  Seo_page_links_func?: Maybe<Count_Functions>;
  created_at?: Maybe<Scalars['Date']>;
  created_at_func?: Maybe<Datetime_Functions>;
  created_by?: Maybe<Scalars['Int']>;
  h1?: Maybe<Scalars['String']>;
  h2?: Maybe<Scalars['String']>;
  h3?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  is_archived?: Maybe<Scalars['Boolean']>;
  markup_schema?: Maybe<Scalars['JSON']>;
  markup_schema_func?: Maybe<Count_Functions>;
  meta_description?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Posts>>>;
  posts_func?: Maybe<Count_Functions>;
  slug?: Maybe<Scalars['String']>;
  sub_heading_text?: Maybe<Scalars['String']>;
  tick_1?: Maybe<Scalars['String']>;
  tick_2?: Maybe<Scalars['String']>;
  tick_3?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  updated_at_func?: Maybe<Datetime_Functions>;
  updated_by?: Maybe<Scalars['Int']>;
};


export type Booking_PagesFaQsArgs = {
  filter?: InputMaybe<Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Booking_PagesSeo_Page_LinksArgs = {
  filter?: InputMaybe<Seopage_Links_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Booking_PagesPostsArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Booking_Pages_Aggregated = {
  __typename?: 'booking_pages_aggregated';
  avg?: Maybe<Booking_Pages_Aggregated_Fields>;
  avgDistinct?: Maybe<Booking_Pages_Aggregated_Fields>;
  count?: Maybe<Booking_Pages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Booking_Pages_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Booking_Pages_Aggregated_Fields>;
  min?: Maybe<Booking_Pages_Aggregated_Fields>;
  sum?: Maybe<Booking_Pages_Aggregated_Fields>;
  sumDistinct?: Maybe<Booking_Pages_Aggregated_Fields>;
};

export type Booking_Pages_Aggregated_Count = {
  __typename?: 'booking_pages_aggregated_count';
  FAQs?: Maybe<Scalars['Int']>;
  Seo_page_links?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  h1?: Maybe<Scalars['Int']>;
  h2?: Maybe<Scalars['Int']>;
  h3?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_archived?: Maybe<Scalars['Int']>;
  markup_schema?: Maybe<Scalars['Int']>;
  meta_description?: Maybe<Scalars['Int']>;
  meta_title?: Maybe<Scalars['Int']>;
  posts?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  sub_heading_text?: Maybe<Scalars['Int']>;
  tick_1?: Maybe<Scalars['Int']>;
  tick_2?: Maybe<Scalars['Int']>;
  tick_3?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

export type Booking_Pages_Aggregated_Fields = {
  __typename?: 'booking_pages_aggregated_fields';
  created_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

export type Booking_Pages_Filter = {
  FAQs?: InputMaybe<Faqs_Filter>;
  FAQs_func?: InputMaybe<Count_Function_Filter_Operators>;
  Seo_page_links?: InputMaybe<Seopage_Links_Filter>;
  Seo_page_links_func?: InputMaybe<Count_Function_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<Booking_Pages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Booking_Pages_Filter>>>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  created_by?: InputMaybe<Number_Filter_Operators>;
  h1?: InputMaybe<String_Filter_Operators>;
  h2?: InputMaybe<String_Filter_Operators>;
  h3?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  is_archived?: InputMaybe<Boolean_Filter_Operators>;
  markup_schema?: InputMaybe<String_Filter_Operators>;
  markup_schema_func?: InputMaybe<Count_Function_Filter_Operators>;
  meta_description?: InputMaybe<String_Filter_Operators>;
  meta_title?: InputMaybe<String_Filter_Operators>;
  posts?: InputMaybe<Posts_Filter>;
  posts_func?: InputMaybe<Count_Function_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sub_heading_text?: InputMaybe<String_Filter_Operators>;
  tick_1?: InputMaybe<String_Filter_Operators>;
  tick_2?: InputMaybe<String_Filter_Operators>;
  tick_3?: InputMaybe<String_Filter_Operators>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  updated_by?: InputMaybe<Number_Filter_Operators>;
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Cities = {
  __typename?: 'cities';
  Clinics?: Maybe<Array<Maybe<Clinics>>>;
  Clinics_func?: Maybe<Count_Functions>;
  FAQs?: Maybe<Array<Maybe<Faqs>>>;
  FAQs_func?: Maybe<Count_Functions>;
  Posts?: Maybe<Array<Maybe<Posts>>>;
  Posts_func?: Maybe<Count_Functions>;
  Seo_page_links?: Maybe<Array<Maybe<Seopage_Links>>>;
  Seo_page_links_func?: Maybe<Count_Functions>;
  Suburbs?: Maybe<Array<Maybe<Suburbs>>>;
  Suburbs_func?: Maybe<Count_Functions>;
  about_bookphysio?: Maybe<Scalars['String']>;
  breadcrumbs?: Maybe<Scalars['JSON']>;
  breadcrumbs_func?: Maybe<Count_Functions>;
  content_creators?: Maybe<Array<Maybe<Content_Creators>>>;
  content_creators_func?: Maybe<Count_Functions>;
  created_at?: Maybe<Scalars['Date']>;
  created_at_func?: Maybe<Datetime_Functions>;
  created_by?: Maybe<Scalars['Int']>;
  h1?: Maybe<Scalars['String']>;
  h2?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  is_archived?: Maybe<Scalars['Boolean']>;
  markup_schema?: Maybe<Scalars['JSON']>;
  markup_schema_func?: Maybe<Count_Functions>;
  meta_description?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  state?: Maybe<States>;
  sub_heading_text?: Maybe<Scalars['String']>;
  tick_1?: Maybe<Scalars['String']>;
  tick_2?: Maybe<Scalars['String']>;
  tick_3?: Maybe<Scalars['String']>;
  top_clinics?: Maybe<Scalars['JSON']>;
  top_clinics_func?: Maybe<Count_Functions>;
  updated_at?: Maybe<Scalars['Date']>;
  updated_at_func?: Maybe<Datetime_Functions>;
  updated_by?: Maybe<Scalars['Int']>;
};


export type CitiesClinicsArgs = {
  filter?: InputMaybe<Clinics_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CitiesFaQsArgs = {
  filter?: InputMaybe<Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CitiesPostsArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CitiesSeo_Page_LinksArgs = {
  filter?: InputMaybe<Seopage_Links_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CitiesSuburbsArgs = {
  filter?: InputMaybe<Suburbs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CitiesContent_CreatorsArgs = {
  filter?: InputMaybe<Content_Creators_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CitiesStateArgs = {
  filter?: InputMaybe<States_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Cities_Aggregated = {
  __typename?: 'cities_aggregated';
  avg?: Maybe<Cities_Aggregated_Fields>;
  avgDistinct?: Maybe<Cities_Aggregated_Fields>;
  count?: Maybe<Cities_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Cities_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Cities_Aggregated_Fields>;
  min?: Maybe<Cities_Aggregated_Fields>;
  sum?: Maybe<Cities_Aggregated_Fields>;
  sumDistinct?: Maybe<Cities_Aggregated_Fields>;
};

export type Cities_Aggregated_Count = {
  __typename?: 'cities_aggregated_count';
  Clinics?: Maybe<Scalars['Int']>;
  FAQs?: Maybe<Scalars['Int']>;
  Posts?: Maybe<Scalars['Int']>;
  Seo_page_links?: Maybe<Scalars['Int']>;
  Suburbs?: Maybe<Scalars['Int']>;
  about_bookphysio?: Maybe<Scalars['Int']>;
  breadcrumbs?: Maybe<Scalars['Int']>;
  content_creators?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  h1?: Maybe<Scalars['Int']>;
  h2?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_archived?: Maybe<Scalars['Int']>;
  markup_schema?: Maybe<Scalars['Int']>;
  meta_description?: Maybe<Scalars['Int']>;
  meta_title?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['Int']>;
  sub_heading_text?: Maybe<Scalars['Int']>;
  tick_1?: Maybe<Scalars['Int']>;
  tick_2?: Maybe<Scalars['Int']>;
  tick_3?: Maybe<Scalars['Int']>;
  top_clinics?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

export type Cities_Aggregated_Fields = {
  __typename?: 'cities_aggregated_fields';
  created_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

export type Cities_Filter = {
  Clinics?: InputMaybe<Clinics_Filter>;
  Clinics_func?: InputMaybe<Count_Function_Filter_Operators>;
  FAQs?: InputMaybe<Faqs_Filter>;
  FAQs_func?: InputMaybe<Count_Function_Filter_Operators>;
  Posts?: InputMaybe<Posts_Filter>;
  Posts_func?: InputMaybe<Count_Function_Filter_Operators>;
  Seo_page_links?: InputMaybe<Seopage_Links_Filter>;
  Seo_page_links_func?: InputMaybe<Count_Function_Filter_Operators>;
  Suburbs?: InputMaybe<Suburbs_Filter>;
  Suburbs_func?: InputMaybe<Count_Function_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<Cities_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Cities_Filter>>>;
  about_bookphysio?: InputMaybe<String_Filter_Operators>;
  breadcrumbs?: InputMaybe<String_Filter_Operators>;
  breadcrumbs_func?: InputMaybe<Count_Function_Filter_Operators>;
  content_creators?: InputMaybe<Content_Creators_Filter>;
  content_creators_func?: InputMaybe<Count_Function_Filter_Operators>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  created_by?: InputMaybe<Number_Filter_Operators>;
  h1?: InputMaybe<String_Filter_Operators>;
  h2?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  is_archived?: InputMaybe<Boolean_Filter_Operators>;
  markup_schema?: InputMaybe<String_Filter_Operators>;
  markup_schema_func?: InputMaybe<Count_Function_Filter_Operators>;
  meta_description?: InputMaybe<String_Filter_Operators>;
  meta_title?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  state?: InputMaybe<States_Filter>;
  sub_heading_text?: InputMaybe<String_Filter_Operators>;
  tick_1?: InputMaybe<String_Filter_Operators>;
  tick_2?: InputMaybe<String_Filter_Operators>;
  tick_3?: InputMaybe<String_Filter_Operators>;
  top_clinics?: InputMaybe<String_Filter_Operators>;
  top_clinics_func?: InputMaybe<Count_Function_Filter_Operators>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  updated_by?: InputMaybe<Number_Filter_Operators>;
};

export type Clinics = {
  __typename?: 'clinics';
  Appointments?: Maybe<Array<Maybe<Appointments>>>;
  Appointments_func?: Maybe<Count_Functions>;
  about_clinic?: Maybe<Scalars['String']>;
  active_appointment_types_count?: Maybe<Scalars['Int']>;
  api_key?: Maybe<Scalars['String']>;
  appointment_types?: Maybe<Scalars['JSON']>;
  appointment_types_func?: Maybe<Count_Functions>;
  chargebee_customer_id?: Maybe<Scalars['String']>;
  city?: Maybe<Cities>;
  clinic_booking_link?: Maybe<Scalars['String']>;
  clinic_email?: Maybe<Scalars['String']>;
  clinic_phone_number?: Maybe<Scalars['String']>;
  clinic_practitioners?: Maybe<Array<Maybe<Clinics_Practitioners_Clinics>>>;
  clinic_practitioners_func?: Maybe<Count_Functions>;
  connected_to_provider?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['Date']>;
  created_at_func?: Maybe<Datetime_Functions>;
  created_by?: Maybe<Scalars['Int']>;
  display_for_booking?: Maybe<Scalars['Boolean']>;
  full_address?: Maybe<Scalars['String']>;
  has_appointment_cost?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  id_from_provider?: Maybe<Scalars['String']>;
  images_data?: Maybe<Scalars['JSON']>;
  images_data_func?: Maybe<Count_Functions>;
  invoices?: Maybe<Array<Maybe<Invoices>>>;
  invoices_func?: Maybe<Count_Functions>;
  is_archived?: Maybe<Scalars['Boolean']>;
  is_data_valid?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['JSON']>;
  location_func?: Maybe<Count_Functions>;
  logo?: Maybe<Directus_Files>;
  logo_alt_text?: Maybe<Scalars['String']>;
  markup_schema?: Maybe<Scalars['JSON']>;
  markup_schema_func?: Maybe<Count_Functions>;
  meta_description?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** Clinics that are within 5 km radius counting from clinic location */
  nearby_clinics?: Maybe<Scalars['JSON']>;
  nearby_clinics_func?: Maybe<Count_Functions>;
  nearby_suburbs?: Maybe<Scalars['JSON']>;
  nearby_suburbs_func?: Maybe<Count_Functions>;
  opening_hours?: Maybe<Scalars['JSON']>;
  opening_hours_func?: Maybe<Count_Functions>;
  owner?: Maybe<Clinics_Owners>;
  pms?: Maybe<Scalars['String']>;
  popular?: Maybe<Scalars['Boolean']>;
  postcode?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  state?: Maybe<States>;
  suburb?: Maybe<Suburbs>;
  team_image?: Maybe<Directus_Files>;
  team_image_alt_text?: Maybe<Scalars['String']>;
  time_zone?: Maybe<Scalars['String']>;
  typeform_registration_link?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  updated_at_func?: Maybe<Datetime_Functions>;
  updated_by?: Maybe<Scalars['Int']>;
  use_test_chargebee?: Maybe<Scalars['Boolean']>;
  validation_description?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};


export type ClinicsAppointmentsArgs = {
  filter?: InputMaybe<Appointments_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ClinicsCityArgs = {
  filter?: InputMaybe<Cities_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ClinicsClinic_PractitionersArgs = {
  filter?: InputMaybe<Clinics_Practitioners_Clinics_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ClinicsInvoicesArgs = {
  filter?: InputMaybe<Invoices_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ClinicsLogoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ClinicsOwnerArgs = {
  filter?: InputMaybe<Clinics_Owners_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ClinicsStateArgs = {
  filter?: InputMaybe<States_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ClinicsSuburbArgs = {
  filter?: InputMaybe<Suburbs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ClinicsTeam_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Clinics_Aggregated = {
  __typename?: 'clinics_aggregated';
  avg?: Maybe<Clinics_Aggregated_Fields>;
  avgDistinct?: Maybe<Clinics_Aggregated_Fields>;
  count?: Maybe<Clinics_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Clinics_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Clinics_Aggregated_Fields>;
  min?: Maybe<Clinics_Aggregated_Fields>;
  sum?: Maybe<Clinics_Aggregated_Fields>;
  sumDistinct?: Maybe<Clinics_Aggregated_Fields>;
};

export type Clinics_Aggregated_Count = {
  __typename?: 'clinics_aggregated_count';
  Appointments?: Maybe<Scalars['Int']>;
  about_clinic?: Maybe<Scalars['Int']>;
  active_appointment_types_count?: Maybe<Scalars['Int']>;
  api_key?: Maybe<Scalars['Int']>;
  appointment_types?: Maybe<Scalars['Int']>;
  chargebee_customer_id?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['Int']>;
  clinic_booking_link?: Maybe<Scalars['Int']>;
  clinic_email?: Maybe<Scalars['Int']>;
  clinic_phone_number?: Maybe<Scalars['Int']>;
  clinic_practitioners?: Maybe<Scalars['Int']>;
  connected_to_provider?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  display_for_booking?: Maybe<Scalars['Int']>;
  full_address?: Maybe<Scalars['Int']>;
  has_appointment_cost?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  id_from_provider?: Maybe<Scalars['Int']>;
  images_data?: Maybe<Scalars['Int']>;
  invoices?: Maybe<Scalars['Int']>;
  is_archived?: Maybe<Scalars['Int']>;
  is_data_valid?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['Int']>;
  logo?: Maybe<Scalars['Int']>;
  logo_alt_text?: Maybe<Scalars['Int']>;
  markup_schema?: Maybe<Scalars['Int']>;
  meta_description?: Maybe<Scalars['Int']>;
  meta_title?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  /** Clinics that are within 5 km radius counting from clinic location */
  nearby_clinics?: Maybe<Scalars['Int']>;
  nearby_suburbs?: Maybe<Scalars['Int']>;
  opening_hours?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['Int']>;
  pms?: Maybe<Scalars['Int']>;
  popular?: Maybe<Scalars['Int']>;
  postcode?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['Int']>;
  suburb?: Maybe<Scalars['Int']>;
  team_image?: Maybe<Scalars['Int']>;
  team_image_alt_text?: Maybe<Scalars['Int']>;
  time_zone?: Maybe<Scalars['Int']>;
  typeform_registration_link?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
  use_test_chargebee?: Maybe<Scalars['Int']>;
  validation_description?: Maybe<Scalars['Int']>;
  website?: Maybe<Scalars['Int']>;
};

export type Clinics_Aggregated_Fields = {
  __typename?: 'clinics_aggregated_fields';
  active_appointment_types_count?: Maybe<Scalars['Float']>;
  city?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  owner?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['Float']>;
  suburb?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

export type Clinics_Filter = {
  Appointments?: InputMaybe<Appointments_Filter>;
  Appointments_func?: InputMaybe<Count_Function_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<Clinics_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Clinics_Filter>>>;
  about_clinic?: InputMaybe<String_Filter_Operators>;
  active_appointment_types_count?: InputMaybe<Number_Filter_Operators>;
  api_key?: InputMaybe<String_Filter_Operators>;
  appointment_types?: InputMaybe<String_Filter_Operators>;
  appointment_types_func?: InputMaybe<Count_Function_Filter_Operators>;
  chargebee_customer_id?: InputMaybe<String_Filter_Operators>;
  city?: InputMaybe<Cities_Filter>;
  clinic_booking_link?: InputMaybe<String_Filter_Operators>;
  clinic_email?: InputMaybe<String_Filter_Operators>;
  clinic_phone_number?: InputMaybe<String_Filter_Operators>;
  clinic_practitioners?: InputMaybe<Clinics_Practitioners_Clinics_Filter>;
  clinic_practitioners_func?: InputMaybe<Count_Function_Filter_Operators>;
  connected_to_provider?: InputMaybe<Boolean_Filter_Operators>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  created_by?: InputMaybe<Number_Filter_Operators>;
  display_for_booking?: InputMaybe<Boolean_Filter_Operators>;
  full_address?: InputMaybe<String_Filter_Operators>;
  has_appointment_cost?: InputMaybe<Boolean_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  id_from_provider?: InputMaybe<String_Filter_Operators>;
  images_data?: InputMaybe<String_Filter_Operators>;
  images_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  invoices?: InputMaybe<Invoices_Filter>;
  invoices_func?: InputMaybe<Count_Function_Filter_Operators>;
  is_archived?: InputMaybe<Boolean_Filter_Operators>;
  is_data_valid?: InputMaybe<Boolean_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  location_func?: InputMaybe<Count_Function_Filter_Operators>;
  logo?: InputMaybe<Directus_Files_Filter>;
  logo_alt_text?: InputMaybe<String_Filter_Operators>;
  markup_schema?: InputMaybe<String_Filter_Operators>;
  markup_schema_func?: InputMaybe<Count_Function_Filter_Operators>;
  meta_description?: InputMaybe<String_Filter_Operators>;
  meta_title?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  nearby_clinics?: InputMaybe<String_Filter_Operators>;
  nearby_clinics_func?: InputMaybe<Count_Function_Filter_Operators>;
  nearby_suburbs?: InputMaybe<String_Filter_Operators>;
  nearby_suburbs_func?: InputMaybe<Count_Function_Filter_Operators>;
  opening_hours?: InputMaybe<String_Filter_Operators>;
  opening_hours_func?: InputMaybe<Count_Function_Filter_Operators>;
  owner?: InputMaybe<Clinics_Owners_Filter>;
  pms?: InputMaybe<String_Filter_Operators>;
  popular?: InputMaybe<Boolean_Filter_Operators>;
  postcode?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  state?: InputMaybe<States_Filter>;
  suburb?: InputMaybe<Suburbs_Filter>;
  team_image?: InputMaybe<Directus_Files_Filter>;
  team_image_alt_text?: InputMaybe<String_Filter_Operators>;
  time_zone?: InputMaybe<String_Filter_Operators>;
  typeform_registration_link?: InputMaybe<String_Filter_Operators>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  updated_by?: InputMaybe<Number_Filter_Operators>;
  use_test_chargebee?: InputMaybe<Boolean_Filter_Operators>;
  validation_description?: InputMaybe<String_Filter_Operators>;
  website?: InputMaybe<String_Filter_Operators>;
};

export type Clinics_Owners = {
  __typename?: 'clinics_owners';
  clinics?: Maybe<Array<Maybe<Clinics>>>;
  clinics_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  last_name?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  sign_up_date?: Maybe<Scalars['Date']>;
  sign_up_date_func?: Maybe<Date_Functions>;
  title?: Maybe<Scalars['String']>;
};


export type Clinics_OwnersClinicsArgs = {
  filter?: InputMaybe<Clinics_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Clinics_Owners_Aggregated = {
  __typename?: 'clinics_owners_aggregated';
  avg?: Maybe<Clinics_Owners_Aggregated_Fields>;
  avgDistinct?: Maybe<Clinics_Owners_Aggregated_Fields>;
  count?: Maybe<Clinics_Owners_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Clinics_Owners_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Clinics_Owners_Aggregated_Fields>;
  min?: Maybe<Clinics_Owners_Aggregated_Fields>;
  sum?: Maybe<Clinics_Owners_Aggregated_Fields>;
  sumDistinct?: Maybe<Clinics_Owners_Aggregated_Fields>;
};

export type Clinics_Owners_Aggregated_Count = {
  __typename?: 'clinics_owners_aggregated_count';
  clinics?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['Int']>;
  notes?: Maybe<Scalars['Int']>;
  phone_number?: Maybe<Scalars['Int']>;
  sign_up_date?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
};

export type Clinics_Owners_Aggregated_Fields = {
  __typename?: 'clinics_owners_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Clinics_Owners_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Clinics_Owners_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Clinics_Owners_Filter>>>;
  clinics?: InputMaybe<Clinics_Filter>;
  clinics_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  notes?: InputMaybe<String_Filter_Operators>;
  phone_number?: InputMaybe<String_Filter_Operators>;
  sign_up_date?: InputMaybe<Date_Filter_Operators>;
  sign_up_date_func?: InputMaybe<Date_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Clinics_Practitioners = {
  __typename?: 'clinics_practitioners';
  active?: Maybe<Scalars['Boolean']>;
  available_for_bookings?: Maybe<Scalars['Boolean']>;
  clinics?: Maybe<Array<Maybe<Clinics_Practitioners_Clinics>>>;
  clinics_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  first_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  last_name?: Maybe<Scalars['String']>;
  provider_id?: Maybe<Scalars['String']>;
  related_appointment_types?: Maybe<Scalars['JSON']>;
  related_appointment_types_func?: Maybe<Count_Functions>;
  speciality?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type Clinics_PractitionersClinicsArgs = {
  filter?: InputMaybe<Clinics_Practitioners_Clinics_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Clinics_Practitioners_Aggregated = {
  __typename?: 'clinics_practitioners_aggregated';
  avg?: Maybe<Clinics_Practitioners_Aggregated_Fields>;
  avgDistinct?: Maybe<Clinics_Practitioners_Aggregated_Fields>;
  count?: Maybe<Clinics_Practitioners_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Clinics_Practitioners_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Clinics_Practitioners_Aggregated_Fields>;
  min?: Maybe<Clinics_Practitioners_Aggregated_Fields>;
  sum?: Maybe<Clinics_Practitioners_Aggregated_Fields>;
  sumDistinct?: Maybe<Clinics_Practitioners_Aggregated_Fields>;
};

export type Clinics_Practitioners_Aggregated_Count = {
  __typename?: 'clinics_practitioners_aggregated_count';
  active?: Maybe<Scalars['Int']>;
  available_for_bookings?: Maybe<Scalars['Int']>;
  clinics?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['Int']>;
  gender?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['Int']>;
  provider_id?: Maybe<Scalars['Int']>;
  related_appointment_types?: Maybe<Scalars['Int']>;
  speciality?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
};

export type Clinics_Practitioners_Aggregated_Fields = {
  __typename?: 'clinics_practitioners_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Clinics_Practitioners_Clinics = {
  __typename?: 'clinics_practitioners_clinics';
  clinics_id?: Maybe<Clinics>;
  clinics_practitioners_id?: Maybe<Clinics_Practitioners>;
  id?: Maybe<Scalars['ID']>;
};


export type Clinics_Practitioners_ClinicsClinics_IdArgs = {
  filter?: InputMaybe<Clinics_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Clinics_Practitioners_ClinicsClinics_Practitioners_IdArgs = {
  filter?: InputMaybe<Clinics_Practitioners_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Clinics_Practitioners_Clinics_Aggregated = {
  __typename?: 'clinics_practitioners_clinics_aggregated';
  avg?: Maybe<Clinics_Practitioners_Clinics_Aggregated_Fields>;
  avgDistinct?: Maybe<Clinics_Practitioners_Clinics_Aggregated_Fields>;
  count?: Maybe<Clinics_Practitioners_Clinics_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Clinics_Practitioners_Clinics_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Clinics_Practitioners_Clinics_Aggregated_Fields>;
  min?: Maybe<Clinics_Practitioners_Clinics_Aggregated_Fields>;
  sum?: Maybe<Clinics_Practitioners_Clinics_Aggregated_Fields>;
  sumDistinct?: Maybe<Clinics_Practitioners_Clinics_Aggregated_Fields>;
};

export type Clinics_Practitioners_Clinics_Aggregated_Count = {
  __typename?: 'clinics_practitioners_clinics_aggregated_count';
  clinics_id?: Maybe<Scalars['Int']>;
  clinics_practitioners_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Clinics_Practitioners_Clinics_Aggregated_Fields = {
  __typename?: 'clinics_practitioners_clinics_aggregated_fields';
  clinics_id?: Maybe<Scalars['Float']>;
  clinics_practitioners_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type Clinics_Practitioners_Clinics_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Clinics_Practitioners_Clinics_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Clinics_Practitioners_Clinics_Filter>>>;
  clinics_id?: InputMaybe<Clinics_Filter>;
  clinics_practitioners_id?: InputMaybe<Clinics_Practitioners_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
};

export type Clinics_Practitioners_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Clinics_Practitioners_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Clinics_Practitioners_Filter>>>;
  active?: InputMaybe<Boolean_Filter_Operators>;
  available_for_bookings?: InputMaybe<Boolean_Filter_Operators>;
  clinics?: InputMaybe<Clinics_Practitioners_Clinics_Filter>;
  clinics_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  gender?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  provider_id?: InputMaybe<String_Filter_Operators>;
  related_appointment_types?: InputMaybe<String_Filter_Operators>;
  related_appointment_types_func?: InputMaybe<Count_Function_Filter_Operators>;
  speciality?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Content_Creators = {
  __typename?: 'content_creators';
  accomplishments?: Maybe<Scalars['JSON']>;
  accomplishments_func?: Maybe<Count_Functions>;
  areas_of_expertise?: Maybe<Scalars['JSON']>;
  areas_of_expertise_func?: Maybe<Count_Functions>;
  articles_authored?: Maybe<Array<Maybe<Articles_Content_Creators_2>>>;
  articles_authored_func?: Maybe<Count_Functions>;
  articles_contributed?: Maybe<Array<Maybe<Articles_Content_Creators_4>>>;
  articles_contributed_func?: Maybe<Count_Functions>;
  articles_reviewed?: Maybe<Array<Maybe<Articles_Content_Creators_3>>>;
  articles_reviewed_func?: Maybe<Count_Functions>;
  certifications?: Maybe<Scalars['JSON']>;
  certifications_func?: Maybe<Count_Functions>;
  city?: Maybe<Cities>;
  country?: Maybe<Countries>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  degrees?: Maybe<Scalars['JSON']>;
  degrees_func?: Maybe<Count_Functions>;
  h1?: Maybe<Scalars['String']>;
  h2?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  linked_in?: Maybe<Scalars['String']>;
  markup_schema?: Maybe<Scalars['JSON']>;
  markup_schema_func?: Maybe<Count_Functions>;
  medical_title?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  mini_description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  profile_picture?: Maybe<Directus_Files>;
  publisher?: Maybe<Publishers>;
  slug?: Maybe<Scalars['String']>;
  state?: Maybe<States>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
  website?: Maybe<Scalars['String']>;
};


export type Content_CreatorsArticles_AuthoredArgs = {
  filter?: InputMaybe<Articles_Content_Creators_2_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Content_CreatorsArticles_ContributedArgs = {
  filter?: InputMaybe<Articles_Content_Creators_4_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Content_CreatorsArticles_ReviewedArgs = {
  filter?: InputMaybe<Articles_Content_Creators_3_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Content_CreatorsCityArgs = {
  filter?: InputMaybe<Cities_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Content_CreatorsCountryArgs = {
  filter?: InputMaybe<Countries_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Content_CreatorsProfile_PictureArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Content_CreatorsPublisherArgs = {
  filter?: InputMaybe<Publishers_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Content_CreatorsStateArgs = {
  filter?: InputMaybe<States_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Content_CreatorsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Content_CreatorsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Content_Creators_Aggregated = {
  __typename?: 'content_creators_aggregated';
  avg?: Maybe<Content_Creators_Aggregated_Fields>;
  avgDistinct?: Maybe<Content_Creators_Aggregated_Fields>;
  count?: Maybe<Content_Creators_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Content_Creators_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Content_Creators_Aggregated_Fields>;
  min?: Maybe<Content_Creators_Aggregated_Fields>;
  sum?: Maybe<Content_Creators_Aggregated_Fields>;
  sumDistinct?: Maybe<Content_Creators_Aggregated_Fields>;
};

export type Content_Creators_Aggregated_Count = {
  __typename?: 'content_creators_aggregated_count';
  accomplishments?: Maybe<Scalars['Int']>;
  areas_of_expertise?: Maybe<Scalars['Int']>;
  articles_authored?: Maybe<Scalars['Int']>;
  articles_contributed?: Maybe<Scalars['Int']>;
  articles_reviewed?: Maybe<Scalars['Int']>;
  certifications?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['Int']>;
  country?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  degrees?: Maybe<Scalars['Int']>;
  h1?: Maybe<Scalars['Int']>;
  h2?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  linked_in?: Maybe<Scalars['Int']>;
  markup_schema?: Maybe<Scalars['Int']>;
  medical_title?: Maybe<Scalars['Int']>;
  meta_description?: Maybe<Scalars['Int']>;
  meta_title?: Maybe<Scalars['Int']>;
  mini_description?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  profile?: Maybe<Scalars['Int']>;
  profile_picture?: Maybe<Scalars['Int']>;
  publisher?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
  website?: Maybe<Scalars['Int']>;
};

export type Content_Creators_Aggregated_Fields = {
  __typename?: 'content_creators_aggregated_fields';
  city?: Maybe<Scalars['Float']>;
  country?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  publisher?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['Float']>;
};

export type Content_Creators_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Content_Creators_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Content_Creators_Filter>>>;
  accomplishments?: InputMaybe<String_Filter_Operators>;
  accomplishments_func?: InputMaybe<Count_Function_Filter_Operators>;
  areas_of_expertise?: InputMaybe<String_Filter_Operators>;
  areas_of_expertise_func?: InputMaybe<Count_Function_Filter_Operators>;
  articles_authored?: InputMaybe<Articles_Content_Creators_2_Filter>;
  articles_authored_func?: InputMaybe<Count_Function_Filter_Operators>;
  articles_contributed?: InputMaybe<Articles_Content_Creators_4_Filter>;
  articles_contributed_func?: InputMaybe<Count_Function_Filter_Operators>;
  articles_reviewed?: InputMaybe<Articles_Content_Creators_3_Filter>;
  articles_reviewed_func?: InputMaybe<Count_Function_Filter_Operators>;
  certifications?: InputMaybe<String_Filter_Operators>;
  certifications_func?: InputMaybe<Count_Function_Filter_Operators>;
  city?: InputMaybe<Cities_Filter>;
  country?: InputMaybe<Countries_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  degrees?: InputMaybe<String_Filter_Operators>;
  degrees_func?: InputMaybe<Count_Function_Filter_Operators>;
  h1?: InputMaybe<String_Filter_Operators>;
  h2?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  linked_in?: InputMaybe<String_Filter_Operators>;
  markup_schema?: InputMaybe<String_Filter_Operators>;
  markup_schema_func?: InputMaybe<Count_Function_Filter_Operators>;
  medical_title?: InputMaybe<String_Filter_Operators>;
  meta_description?: InputMaybe<String_Filter_Operators>;
  meta_title?: InputMaybe<String_Filter_Operators>;
  mini_description?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  profile?: InputMaybe<String_Filter_Operators>;
  profile_picture?: InputMaybe<Directus_Files_Filter>;
  publisher?: InputMaybe<Publishers_Filter>;
  slug?: InputMaybe<String_Filter_Operators>;
  state?: InputMaybe<States_Filter>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
  website?: InputMaybe<String_Filter_Operators>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']>;
};

export type Count_FunctionsInput = {
  count?: InputMaybe<Scalars['Int']>;
};

export type Countries = {
  __typename?: 'countries';
  content_creators?: Maybe<Array<Maybe<Content_Creators>>>;
  content_creators_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type CountriesContent_CreatorsArgs = {
  filter?: InputMaybe<Content_Creators_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CountriesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CountriesUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Countries_Aggregated = {
  __typename?: 'countries_aggregated';
  avg?: Maybe<Countries_Aggregated_Fields>;
  avgDistinct?: Maybe<Countries_Aggregated_Fields>;
  count?: Maybe<Countries_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Countries_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Countries_Aggregated_Fields>;
  min?: Maybe<Countries_Aggregated_Fields>;
  sum?: Maybe<Countries_Aggregated_Fields>;
  sumDistinct?: Maybe<Countries_Aggregated_Fields>;
};

export type Countries_Aggregated_Count = {
  __typename?: 'countries_aggregated_count';
  content_creators?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Countries_Aggregated_Fields = {
  __typename?: 'countries_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Countries_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Countries_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Countries_Filter>>>;
  content_creators?: InputMaybe<Content_Creators_Filter>;
  content_creators_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Create_Appointments_Input = {
  cancelled?: InputMaybe<Scalars['String']>;
  clinic?: InputMaybe<Create_Clinics_Input>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  did_not_arrive?: InputMaybe<Scalars['Boolean']>;
  ends_at?: InputMaybe<Scalars['Date']>;
  ends_at_func?: InputMaybe<Datetime_FunctionsInput>;
  existing_patient?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  patient: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
  provider_data?: InputMaybe<Scalars['String']>;
  starts_at?: InputMaybe<Scalars['Date']>;
  starts_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Create_Articles_Content_Creators_2_Input = {
  articles_id?: InputMaybe<Create_Articles_Input>;
  content_creators_id?: InputMaybe<Create_Content_Creators_Input>;
  id?: InputMaybe<Scalars['ID']>;
};

export type Create_Articles_Content_Creators_3_Input = {
  articles_id?: InputMaybe<Create_Articles_Input>;
  content_creators_id?: InputMaybe<Create_Content_Creators_Input>;
  id?: InputMaybe<Scalars['ID']>;
};

export type Create_Articles_Content_Creators_4_Input = {
  articles_id?: InputMaybe<Create_Articles_Input>;
  content_creators_id?: InputMaybe<Create_Content_Creators_Input>;
  id?: InputMaybe<Scalars['ID']>;
};

export type Create_Articles_Input = {
  anchor_sitemap?: InputMaybe<Create_Sitemap_Section_Links_Input>;
  audience?: InputMaybe<Scalars['JSON']>;
  audience_func?: InputMaybe<Count_FunctionsInput>;
  authors?: InputMaybe<Array<InputMaybe<Create_Articles_Content_Creators_2_Input>>>;
  authors_func?: InputMaybe<Count_FunctionsInput>;
  autoupdate_anchor?: InputMaybe<Scalars['Boolean']>;
  categories?: InputMaybe<Scalars['JSON']>;
  categories_func?: InputMaybe<Count_FunctionsInput>;
  citations?: InputMaybe<Scalars['JSON']>;
  citations_func?: InputMaybe<Count_FunctionsInput>;
  content?: InputMaybe<Scalars['String']>;
  contributed_at?: InputMaybe<Scalars['Date']>;
  contributed_at_func?: InputMaybe<Datetime_FunctionsInput>;
  contributors?: InputMaybe<Array<InputMaybe<Create_Articles_Content_Creators_4_Input>>>;
  contributors_func?: InputMaybe<Count_FunctionsInput>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  heading?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Create_Directus_Files_Input>;
  image_alt_text?: InputMaybe<Scalars['String']>;
  is_archived: Scalars['Boolean'];
  keywords?: InputMaybe<Scalars['JSON']>;
  keywords_func?: InputMaybe<Count_FunctionsInput>;
  last_reviewed?: InputMaybe<Scalars['Date']>;
  last_reviewed_func?: InputMaybe<Datetime_FunctionsInput>;
  markup_schema?: InputMaybe<Scalars['JSON']>;
  markup_schema_func?: InputMaybe<Count_FunctionsInput>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Create_Publishers_Input>;
  reviewers?: InputMaybe<Array<InputMaybe<Create_Articles_Content_Creators_3_Input>>>;
  reviewers_func?: InputMaybe<Count_FunctionsInput>;
  slug?: InputMaybe<Scalars['String']>;
  sub_heading?: InputMaybe<Scalars['String']>;
  table_of_contents?: InputMaybe<Scalars['JSON']>;
  table_of_contents_func?: InputMaybe<Count_FunctionsInput>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Create_Availability_Pages_Input = {
  FAQs?: InputMaybe<Array<InputMaybe<Create_Faqs_Input>>>;
  FAQs_func?: InputMaybe<Count_FunctionsInput>;
  about_bookphysio?: InputMaybe<Scalars['String']>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  popular_links?: InputMaybe<Array<InputMaybe<Create_Sitemap_Section_Links_Input>>>;
  popular_links_func?: InputMaybe<Count_FunctionsInput>;
  posts?: InputMaybe<Array<InputMaybe<Create_Posts_Input>>>;
  posts_func?: InputMaybe<Count_FunctionsInput>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Create_Booking_Pages_Input = {
  FAQs?: InputMaybe<Array<InputMaybe<Create_Faqs_Input>>>;
  FAQs_func?: InputMaybe<Count_FunctionsInput>;
  Seo_page_links?: InputMaybe<Array<InputMaybe<Create_Seopage_Links_Input>>>;
  Seo_page_links_func?: InputMaybe<Count_FunctionsInput>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  h1?: InputMaybe<Scalars['String']>;
  h2?: InputMaybe<Scalars['String']>;
  h3?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  markup_schema?: InputMaybe<Scalars['JSON']>;
  markup_schema_func?: InputMaybe<Count_FunctionsInput>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<Array<InputMaybe<Create_Posts_Input>>>;
  posts_func?: InputMaybe<Count_FunctionsInput>;
  slug?: InputMaybe<Scalars['String']>;
  sub_heading_text?: InputMaybe<Scalars['String']>;
  tick_1?: InputMaybe<Scalars['String']>;
  tick_2?: InputMaybe<Scalars['String']>;
  tick_3?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Create_Cities_Input = {
  Clinics?: InputMaybe<Array<InputMaybe<Create_Clinics_Input>>>;
  Clinics_func?: InputMaybe<Count_FunctionsInput>;
  FAQs?: InputMaybe<Array<InputMaybe<Create_Faqs_Input>>>;
  FAQs_func?: InputMaybe<Count_FunctionsInput>;
  Posts?: InputMaybe<Array<InputMaybe<Create_Posts_Input>>>;
  Posts_func?: InputMaybe<Count_FunctionsInput>;
  Seo_page_links?: InputMaybe<Array<InputMaybe<Create_Seopage_Links_Input>>>;
  Seo_page_links_func?: InputMaybe<Count_FunctionsInput>;
  Suburbs?: InputMaybe<Array<InputMaybe<Create_Suburbs_Input>>>;
  Suburbs_func?: InputMaybe<Count_FunctionsInput>;
  about_bookphysio?: InputMaybe<Scalars['String']>;
  breadcrumbs?: InputMaybe<Scalars['JSON']>;
  breadcrumbs_func?: InputMaybe<Count_FunctionsInput>;
  content_creators?: InputMaybe<Array<InputMaybe<Create_Content_Creators_Input>>>;
  content_creators_func?: InputMaybe<Count_FunctionsInput>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  h1?: InputMaybe<Scalars['String']>;
  h2?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  markup_schema?: InputMaybe<Scalars['JSON']>;
  markup_schema_func?: InputMaybe<Count_FunctionsInput>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  state?: InputMaybe<Create_States_Input>;
  sub_heading_text?: InputMaybe<Scalars['String']>;
  tick_1?: InputMaybe<Scalars['String']>;
  tick_2?: InputMaybe<Scalars['String']>;
  tick_3?: InputMaybe<Scalars['String']>;
  top_clinics?: InputMaybe<Scalars['JSON']>;
  top_clinics_func?: InputMaybe<Count_FunctionsInput>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Create_Clinics_Input = {
  Appointments?: InputMaybe<Array<InputMaybe<Create_Appointments_Input>>>;
  Appointments_func?: InputMaybe<Count_FunctionsInput>;
  about_clinic?: InputMaybe<Scalars['String']>;
  active_appointment_types_count?: InputMaybe<Scalars['Int']>;
  api_key?: InputMaybe<Scalars['String']>;
  appointment_types?: InputMaybe<Scalars['JSON']>;
  appointment_types_func?: InputMaybe<Count_FunctionsInput>;
  chargebee_customer_id?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Create_Cities_Input>;
  clinic_booking_link?: InputMaybe<Scalars['String']>;
  clinic_email?: InputMaybe<Scalars['String']>;
  clinic_phone_number?: InputMaybe<Scalars['String']>;
  clinic_practitioners?: InputMaybe<Array<InputMaybe<Create_Clinics_Practitioners_Clinics_Input>>>;
  clinic_practitioners_func?: InputMaybe<Count_FunctionsInput>;
  connected_to_provider?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  display_for_booking?: InputMaybe<Scalars['Boolean']>;
  full_address?: InputMaybe<Scalars['String']>;
  has_appointment_cost?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  id_from_provider?: InputMaybe<Scalars['String']>;
  images_data?: InputMaybe<Scalars['JSON']>;
  images_data_func?: InputMaybe<Count_FunctionsInput>;
  invoices?: InputMaybe<Array<InputMaybe<Create_Invoices_Input>>>;
  invoices_func?: InputMaybe<Count_FunctionsInput>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  is_data_valid?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<Scalars['JSON']>;
  location_func?: InputMaybe<Count_FunctionsInput>;
  logo?: InputMaybe<Create_Directus_Files_Input>;
  logo_alt_text?: InputMaybe<Scalars['String']>;
  markup_schema?: InputMaybe<Scalars['JSON']>;
  markup_schema_func?: InputMaybe<Count_FunctionsInput>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  /** Clinics that are within 5 km radius counting from clinic location */
  nearby_clinics?: InputMaybe<Scalars['JSON']>;
  nearby_clinics_func?: InputMaybe<Count_FunctionsInput>;
  nearby_suburbs?: InputMaybe<Scalars['JSON']>;
  nearby_suburbs_func?: InputMaybe<Count_FunctionsInput>;
  opening_hours?: InputMaybe<Scalars['JSON']>;
  opening_hours_func?: InputMaybe<Count_FunctionsInput>;
  owner?: InputMaybe<Create_Clinics_Owners_Input>;
  pms?: InputMaybe<Scalars['String']>;
  popular?: InputMaybe<Scalars['Boolean']>;
  postcode?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  state?: InputMaybe<Create_States_Input>;
  suburb?: InputMaybe<Create_Suburbs_Input>;
  team_image?: InputMaybe<Create_Directus_Files_Input>;
  team_image_alt_text?: InputMaybe<Scalars['String']>;
  time_zone?: InputMaybe<Scalars['String']>;
  typeform_registration_link?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
  use_test_chargebee?: InputMaybe<Scalars['Boolean']>;
  validation_description?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type Create_Clinics_Owners_Input = {
  clinics?: InputMaybe<Array<InputMaybe<Create_Clinics_Input>>>;
  clinics_func?: InputMaybe<Count_FunctionsInput>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  last_name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  sign_up_date?: InputMaybe<Scalars['Date']>;
  sign_up_date_func?: InputMaybe<Date_FunctionsInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type Create_Clinics_Practitioners_Clinics_Input = {
  clinics_id?: InputMaybe<Create_Clinics_Input>;
  clinics_practitioners_id?: InputMaybe<Create_Clinics_Practitioners_Input>;
  id?: InputMaybe<Scalars['ID']>;
};

export type Create_Clinics_Practitioners_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  available_for_bookings?: InputMaybe<Scalars['Boolean']>;
  clinics?: InputMaybe<Array<InputMaybe<Create_Clinics_Practitioners_Clinics_Input>>>;
  clinics_func?: InputMaybe<Count_FunctionsInput>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  first_name?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  last_name?: InputMaybe<Scalars['String']>;
  provider_id?: InputMaybe<Scalars['String']>;
  related_appointment_types?: InputMaybe<Scalars['JSON']>;
  related_appointment_types_func?: InputMaybe<Count_FunctionsInput>;
  speciality?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Create_Content_Creators_Input = {
  accomplishments?: InputMaybe<Scalars['JSON']>;
  accomplishments_func?: InputMaybe<Count_FunctionsInput>;
  areas_of_expertise?: InputMaybe<Scalars['JSON']>;
  areas_of_expertise_func?: InputMaybe<Count_FunctionsInput>;
  articles_authored?: InputMaybe<Array<InputMaybe<Create_Articles_Content_Creators_2_Input>>>;
  articles_authored_func?: InputMaybe<Count_FunctionsInput>;
  articles_contributed?: InputMaybe<Array<InputMaybe<Create_Articles_Content_Creators_4_Input>>>;
  articles_contributed_func?: InputMaybe<Count_FunctionsInput>;
  articles_reviewed?: InputMaybe<Array<InputMaybe<Create_Articles_Content_Creators_3_Input>>>;
  articles_reviewed_func?: InputMaybe<Count_FunctionsInput>;
  certifications?: InputMaybe<Scalars['JSON']>;
  certifications_func?: InputMaybe<Count_FunctionsInput>;
  city?: InputMaybe<Create_Cities_Input>;
  country?: InputMaybe<Create_Countries_Input>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  degrees?: InputMaybe<Scalars['JSON']>;
  degrees_func?: InputMaybe<Count_FunctionsInput>;
  h1?: InputMaybe<Scalars['String']>;
  h2?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  linked_in?: InputMaybe<Scalars['String']>;
  markup_schema?: InputMaybe<Scalars['JSON']>;
  markup_schema_func?: InputMaybe<Count_FunctionsInput>;
  medical_title?: InputMaybe<Scalars['String']>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  mini_description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
  profile_picture?: InputMaybe<Create_Directus_Files_Input>;
  publisher?: InputMaybe<Create_Publishers_Input>;
  slug?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Create_States_Input>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
  website?: InputMaybe<Scalars['String']>;
};

export type Create_Countries_Input = {
  content_creators?: InputMaybe<Array<InputMaybe<Create_Content_Creators_Input>>>;
  content_creators_func?: InputMaybe<Count_FunctionsInput>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  embed?: InputMaybe<Scalars['String']>;
  filename_disk?: InputMaybe<Scalars['String']>;
  filename_download: Scalars['String'];
  filesize?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Create_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  metadata_func?: InputMaybe<Count_FunctionsInput>;
  modified_by?: InputMaybe<Create_Directus_Users_Input>;
  modified_on: Scalars['Date'];
  modified_on_func?: InputMaybe<Datetime_FunctionsInput>;
  storage: Scalars['String'];
  tags?: InputMaybe<Scalars['JSON']>;
  tags_func?: InputMaybe<Count_FunctionsInput>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uploaded_by?: InputMaybe<Create_Directus_Users_Input>;
  uploaded_on: Scalars['Date'];
  uploaded_on_func?: InputMaybe<Datetime_FunctionsInput>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Create_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: InputMaybe<Create_Directus_Folders_Input>;
};

export type Create_Directus_Roles_Input = {
  admin_access: Scalars['Boolean'];
  app_access: Scalars['Boolean'];
  description?: InputMaybe<Scalars['String']>;
  enforce_tfa: Scalars['Boolean'];
  icon: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: Scalars['String'];
  users?: InputMaybe<Array<InputMaybe<Create_Directus_Users_Input>>>;
  users_func?: InputMaybe<Count_FunctionsInput>;
};

export type Create_Directus_Users_Input = {
  auth_data?: InputMaybe<Scalars['JSON']>;
  auth_data_func?: InputMaybe<Count_FunctionsInput>;
  avatar?: InputMaybe<Create_Directus_Files_Input>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_notifications?: InputMaybe<Scalars['Boolean']>;
  external_identifier?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
  last_access?: InputMaybe<Scalars['Date']>;
  last_access_func?: InputMaybe<Datetime_FunctionsInput>;
  last_name?: InputMaybe<Scalars['String']>;
  last_page?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  role?: InputMaybe<Create_Directus_Roles_Input>;
  status: Scalars['String'];
  tags?: InputMaybe<Scalars['JSON']>;
  tags_func?: InputMaybe<Count_FunctionsInput>;
  tfa_secret?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type Create_Faqs_Input = {
  answer?: InputMaybe<Scalars['String']>;
  availability_page?: InputMaybe<Create_Availability_Pages_Input>;
  booking_page?: InputMaybe<Create_Booking_Pages_Input>;
  city?: InputMaybe<Create_Cities_Input>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Create_Pages_Input>;
  question: Scalars['String'];
  suburb?: InputMaybe<Create_Suburbs_Input>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Create_I18n_Locales_Input = {
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Create_Invoices_Input = {
  appointments_ids?: InputMaybe<Scalars['JSON']>;
  appointments_ids_func?: InputMaybe<Count_FunctionsInput>;
  chargebee_id?: InputMaybe<Scalars['String']>;
  clinic?: InputMaybe<Create_Clinics_Input>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
};

export type Create_Pages_Input = {
  FAQs?: InputMaybe<Array<InputMaybe<Create_Faqs_Input>>>;
  FAQs_func?: InputMaybe<Count_FunctionsInput>;
  about?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['JSON']>;
  addressCountry?: InputMaybe<Scalars['String']>;
  address_func?: InputMaybe<Count_FunctionsInput>;
  brand?: InputMaybe<Scalars['JSON']>;
  brand_func?: InputMaybe<Count_FunctionsInput>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  description?: InputMaybe<Scalars['String']>;
  headline?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  markup_schema?: InputMaybe<Scalars['JSON']>;
  markup_schema_func?: InputMaybe<Count_FunctionsInput>;
  page_type?: InputMaybe<Scalars['String']>;
  page_type_for_markup?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Create_Publishers_Input>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Create_Posts_Input = {
  availability_page?: InputMaybe<Create_Availability_Pages_Input>;
  booking_page?: InputMaybe<Create_Booking_Pages_Input>;
  city?: InputMaybe<Create_Cities_Input>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  suburb?: InputMaybe<Create_Suburbs_Input>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Create_Publishers_Input = {
  articles?: InputMaybe<Array<InputMaybe<Create_Articles_Input>>>;
  articles_func?: InputMaybe<Count_FunctionsInput>;
  content_creators?: InputMaybe<Array<InputMaybe<Create_Content_Creators_Input>>>;
  content_creators_func?: InputMaybe<Count_FunctionsInput>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  profiles?: InputMaybe<Scalars['JSON']>;
  profiles_func?: InputMaybe<Count_FunctionsInput>;
  publishing_principles?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Redirects_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  from?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  to?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Create_Directus_Users_Input>;
  user_updated?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Seopage_Links_Input = {
  booking_page?: InputMaybe<Create_Booking_Pages_Input>;
  city?: InputMaybe<Create_Cities_Input>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  heading?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<Scalars['String']>;
  link_text: Scalars['String'];
  link_type?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Create_States_Input>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Create_Sitemap_Page_Sections_Input = {
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  h2?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  section_links?: InputMaybe<Array<InputMaybe<Create_Sitemap_Section_Links_Input>>>;
  section_links_func?: InputMaybe<Count_FunctionsInput>;
  sitemap_page?: InputMaybe<Create_Sitemap_Pages_Input>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Create_Sitemap_Pages_Input = {
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  h1?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  meta_title?: InputMaybe<Scalars['String']>;
  page_sections?: InputMaybe<Array<InputMaybe<Create_Sitemap_Page_Sections_Input>>>;
  page_sections_func?: InputMaybe<Count_FunctionsInput>;
  slug?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Create_Sitemap_Section_Links_Input = {
  availability_page?: InputMaybe<Create_Availability_Pages_Input>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  link_text?: InputMaybe<Scalars['String']>;
  sitemap_pagesection?: InputMaybe<Create_Sitemap_Page_Sections_Input>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Create_States_Input = {
  Cities?: InputMaybe<Array<InputMaybe<Create_Cities_Input>>>;
  Cities_func?: InputMaybe<Count_FunctionsInput>;
  Clinics?: InputMaybe<Array<InputMaybe<Create_Clinics_Input>>>;
  Clinics_func?: InputMaybe<Count_FunctionsInput>;
  Seo_page_links?: InputMaybe<Array<InputMaybe<Create_Seopage_Links_Input>>>;
  Seo_page_links_func?: InputMaybe<Count_FunctionsInput>;
  Suburbs?: InputMaybe<Array<InputMaybe<Create_Suburbs_Input>>>;
  Suburbs_func?: InputMaybe<Count_FunctionsInput>;
  abbreviation?: InputMaybe<Scalars['String']>;
  breadcrumbs?: InputMaybe<Scalars['JSON']>;
  breadcrumbs_func?: InputMaybe<Count_FunctionsInput>;
  content_creators?: InputMaybe<Array<InputMaybe<Create_Content_Creators_Input>>>;
  content_creators_func?: InputMaybe<Count_FunctionsInput>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  h1?: InputMaybe<Scalars['String']>;
  h2?: InputMaybe<Scalars['String']>;
  h3?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  sub_heading_text?: InputMaybe<Scalars['String']>;
  tick_1?: InputMaybe<Scalars['String']>;
  tick_2?: InputMaybe<Scalars['String']>;
  tick_3?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Create_Suburbs_Input = {
  Clinics?: InputMaybe<Array<InputMaybe<Create_Clinics_Input>>>;
  Clinics_func?: InputMaybe<Count_FunctionsInput>;
  FAQs?: InputMaybe<Array<InputMaybe<Create_Faqs_Input>>>;
  FAQs_func?: InputMaybe<Count_FunctionsInput>;
  Posts?: InputMaybe<Array<InputMaybe<Create_Posts_Input>>>;
  Posts_func?: InputMaybe<Count_FunctionsInput>;
  about_bookphysio?: InputMaybe<Scalars['String']>;
  breadcrumbs?: InputMaybe<Scalars['JSON']>;
  breadcrumbs_func?: InputMaybe<Count_FunctionsInput>;
  city?: InputMaybe<Create_Cities_Input>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  h1?: InputMaybe<Scalars['String']>;
  h2?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<Scalars['JSON']>;
  location_func?: InputMaybe<Count_FunctionsInput>;
  markup_schema?: InputMaybe<Scalars['JSON']>;
  markup_schema_func?: InputMaybe<Count_FunctionsInput>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** Clinics that are within 5 km radius counting from suburb location */
  nearby_clinics?: InputMaybe<Scalars['JSON']>;
  nearby_clinics_func?: InputMaybe<Count_FunctionsInput>;
  nearby_suburbs?: InputMaybe<Scalars['JSON']>;
  nearby_suburbs_func?: InputMaybe<Count_FunctionsInput>;
  popular?: InputMaybe<Scalars['Boolean']>;
  postcode?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  state?: InputMaybe<Create_States_Input>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Create_Tokens_Input = {
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  token?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['Int']>;
};

export type Create_Upload_File_Input = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  formats_func?: InputMaybe<Count_FunctionsInput>;
  hash: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  provider_metadata_func?: InputMaybe<Count_FunctionsInput>;
  size: Scalars['Float'];
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
  url: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type Create_Upload_File_Morph_Input = {
  field?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  order?: InputMaybe<Scalars['Int']>;
  related_id?: InputMaybe<Scalars['Int']>;
  related_type?: InputMaybe<Scalars['String']>;
  upload_file_id?: InputMaybe<Scalars['Int']>;
};

export type Date_Filter_Operators = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Date_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Date_Functions = {
  __typename?: 'date_functions';
  day?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type Date_FunctionsInput = {
  day?: InputMaybe<Scalars['Int']>;
  month?: InputMaybe<Scalars['Int']>;
  week?: InputMaybe<Scalars['Int']>;
  weekday?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  weekday?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type Datetime_FunctionsInput = {
  day?: InputMaybe<Scalars['Int']>;
  hour?: InputMaybe<Scalars['Int']>;
  minute?: InputMaybe<Scalars['Int']>;
  month?: InputMaybe<Scalars['Int']>;
  second?: InputMaybe<Scalars['Int']>;
  week?: InputMaybe<Scalars['Int']>;
  weekday?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type Delete_Many = {
  __typename?: 'delete_many';
  ids: Array<Maybe<Scalars['ID']>>;
};

export type Delete_One = {
  __typename?: 'delete_one';
  id: Scalars['ID'];
};

export type Directus_Files = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  embed?: Maybe<Scalars['String']>;
  filename_disk?: Maybe<Scalars['String']>;
  filename_download: Scalars['String'];
  filesize?: Maybe<Scalars['String']>;
  folder?: Maybe<Directus_Folders>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  location?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Directus_Users>;
  modified_on: Scalars['Date'];
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars['String'];
  tags?: Maybe<Scalars['JSON']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  uploaded_by?: Maybe<Directus_Users>;
  uploaded_on: Scalars['Date'];
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']>;
};


export type Directus_FilesFolderArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_FilesModified_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_FilesUploaded_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<String_Filter_Operators>;
  folder?: InputMaybe<Directus_Folders_Filter>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<Directus_Users_Filter>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<Directus_Users_Filter>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Folders = {
  __typename?: 'directus_folders';
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  parent?: Maybe<Directus_Folders>;
};


export type Directus_FoldersParentArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Folders_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  id?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Folders_Filter>;
};

export type Directus_Roles = {
  __typename?: 'directus_roles';
  admin_access: Scalars['Boolean'];
  app_access: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  enforce_tfa: Scalars['Boolean'];
  icon: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  ip_access?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
  users?: Maybe<Array<Maybe<Directus_Users>>>;
  users_func?: Maybe<Count_Functions>;
};


export type Directus_RolesUsersArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Roles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  admin_access?: InputMaybe<Boolean_Filter_Operators>;
  app_access?: InputMaybe<Boolean_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  enforce_tfa?: InputMaybe<Boolean_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  ip_access?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  users?: InputMaybe<Directus_Users_Filter>;
  users_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Users = {
  __typename?: 'directus_users';
  auth_data?: Maybe<Scalars['JSON']>;
  auth_data_func?: Maybe<Count_Functions>;
  avatar?: Maybe<Directus_Files>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_notifications?: Maybe<Scalars['Boolean']>;
  external_identifier?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  language?: Maybe<Scalars['String']>;
  last_access?: Maybe<Scalars['Date']>;
  last_access_func?: Maybe<Datetime_Functions>;
  last_name?: Maybe<Scalars['String']>;
  last_page?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  role?: Maybe<Directus_Roles>;
  status: Scalars['String'];
  tags?: Maybe<Scalars['JSON']>;
  tags_func?: Maybe<Count_Functions>;
  tfa_secret?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};


export type Directus_UsersAvatarArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Directus_UsersRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Directus_Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  auth_data?: InputMaybe<String_Filter_Operators>;
  auth_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  avatar?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  email_notifications?: InputMaybe<Boolean_Filter_Operators>;
  external_identifier?: InputMaybe<String_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
  language?: InputMaybe<String_Filter_Operators>;
  last_access?: InputMaybe<Date_Filter_Operators>;
  last_access_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  last_page?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  password?: InputMaybe<String_Filter_Operators>;
  provider?: InputMaybe<String_Filter_Operators>;
  role?: InputMaybe<Directus_Roles_Filter>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  tfa_secret?: InputMaybe<String_Filter_Operators>;
  theme?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  token?: InputMaybe<String_Filter_Operators>;
};

export type Faqs = {
  __typename?: 'faqs';
  answer?: Maybe<Scalars['String']>;
  availability_page?: Maybe<Availability_Pages>;
  booking_page?: Maybe<Booking_Pages>;
  city?: Maybe<Cities>;
  created_at?: Maybe<Scalars['Date']>;
  created_at_func?: Maybe<Datetime_Functions>;
  created_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  is_archived?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Pages>;
  question: Scalars['String'];
  suburb?: Maybe<Suburbs>;
  updated_at?: Maybe<Scalars['Date']>;
  updated_at_func?: Maybe<Datetime_Functions>;
  updated_by?: Maybe<Scalars['Int']>;
};


export type FaqsAvailability_PageArgs = {
  filter?: InputMaybe<Availability_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type FaqsBooking_PageArgs = {
  filter?: InputMaybe<Booking_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type FaqsCityArgs = {
  filter?: InputMaybe<Cities_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type FaqsPageArgs = {
  filter?: InputMaybe<Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type FaqsSuburbArgs = {
  filter?: InputMaybe<Suburbs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Faqs_Aggregated = {
  __typename?: 'faqs_aggregated';
  avg?: Maybe<Faqs_Aggregated_Fields>;
  avgDistinct?: Maybe<Faqs_Aggregated_Fields>;
  count?: Maybe<Faqs_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Faqs_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Faqs_Aggregated_Fields>;
  min?: Maybe<Faqs_Aggregated_Fields>;
  sum?: Maybe<Faqs_Aggregated_Fields>;
  sumDistinct?: Maybe<Faqs_Aggregated_Fields>;
};

export type Faqs_Aggregated_Count = {
  __typename?: 'faqs_aggregated_count';
  answer?: Maybe<Scalars['Int']>;
  availability_page?: Maybe<Scalars['Int']>;
  booking_page?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_archived?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  question?: Maybe<Scalars['Int']>;
  suburb?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

export type Faqs_Aggregated_Fields = {
  __typename?: 'faqs_aggregated_fields';
  availability_page?: Maybe<Scalars['Float']>;
  booking_page?: Maybe<Scalars['Float']>;
  city?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  page?: Maybe<Scalars['Float']>;
  suburb?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

export type Faqs_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Faqs_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Faqs_Filter>>>;
  answer?: InputMaybe<String_Filter_Operators>;
  availability_page?: InputMaybe<Availability_Pages_Filter>;
  booking_page?: InputMaybe<Booking_Pages_Filter>;
  city?: InputMaybe<Cities_Filter>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  created_by?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  is_archived?: InputMaybe<Boolean_Filter_Operators>;
  page?: InputMaybe<Pages_Filter>;
  question?: InputMaybe<String_Filter_Operators>;
  suburb?: InputMaybe<Suburbs_Filter>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  updated_by?: InputMaybe<Number_Filter_Operators>;
};

export type I18n_Locales = {
  __typename?: 'i18n_locales';
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  created_at_func?: Maybe<Datetime_Functions>;
  created_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  updated_at_func?: Maybe<Datetime_Functions>;
  updated_by?: Maybe<Scalars['Int']>;
};

export type I18n_Locales_Aggregated = {
  __typename?: 'i18n_locales_aggregated';
  avg?: Maybe<I18n_Locales_Aggregated_Fields>;
  avgDistinct?: Maybe<I18n_Locales_Aggregated_Fields>;
  count?: Maybe<I18n_Locales_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<I18n_Locales_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<I18n_Locales_Aggregated_Fields>;
  min?: Maybe<I18n_Locales_Aggregated_Fields>;
  sum?: Maybe<I18n_Locales_Aggregated_Fields>;
  sumDistinct?: Maybe<I18n_Locales_Aggregated_Fields>;
};

export type I18n_Locales_Aggregated_Count = {
  __typename?: 'i18n_locales_aggregated_count';
  code?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

export type I18n_Locales_Aggregated_Fields = {
  __typename?: 'i18n_locales_aggregated_fields';
  created_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

export type I18n_Locales_Filter = {
  _and?: InputMaybe<Array<InputMaybe<I18n_Locales_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<I18n_Locales_Filter>>>;
  code?: InputMaybe<String_Filter_Operators>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  created_by?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  updated_by?: InputMaybe<Number_Filter_Operators>;
};

export type Invoices = {
  __typename?: 'invoices';
  appointments_ids?: Maybe<Scalars['JSON']>;
  appointments_ids_func?: Maybe<Count_Functions>;
  chargebee_id?: Maybe<Scalars['String']>;
  clinic?: Maybe<Clinics>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
};


export type InvoicesClinicArgs = {
  filter?: InputMaybe<Clinics_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Invoices_Aggregated = {
  __typename?: 'invoices_aggregated';
  avg?: Maybe<Invoices_Aggregated_Fields>;
  avgDistinct?: Maybe<Invoices_Aggregated_Fields>;
  count?: Maybe<Invoices_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Invoices_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Invoices_Aggregated_Fields>;
  min?: Maybe<Invoices_Aggregated_Fields>;
  sum?: Maybe<Invoices_Aggregated_Fields>;
  sumDistinct?: Maybe<Invoices_Aggregated_Fields>;
};

export type Invoices_Aggregated_Count = {
  __typename?: 'invoices_aggregated_count';
  appointments_ids?: Maybe<Scalars['Int']>;
  chargebee_id?: Maybe<Scalars['Int']>;
  clinic?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type Invoices_Aggregated_Fields = {
  __typename?: 'invoices_aggregated_fields';
  clinic?: Maybe<Scalars['Float']>;
};

export type Invoices_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Invoices_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Invoices_Filter>>>;
  appointments_ids?: InputMaybe<String_Filter_Operators>;
  appointments_ids_func?: InputMaybe<Count_Function_Filter_Operators>;
  chargebee_id?: InputMaybe<String_Filter_Operators>;
  clinic?: InputMaybe<Clinics_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<String_Filter_Operators>;
};

export type Number_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Float']>;
  _gt?: InputMaybe<Scalars['Float']>;
  _gte?: InputMaybe<Scalars['Float']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  _lt?: InputMaybe<Scalars['Float']>;
  _lte?: InputMaybe<Scalars['Float']>;
  _neq?: InputMaybe<Scalars['Float']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _null?: InputMaybe<Scalars['Boolean']>;
};

export type Pages = {
  __typename?: 'pages';
  FAQs?: Maybe<Array<Maybe<Faqs>>>;
  FAQs_func?: Maybe<Count_Functions>;
  about?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['JSON']>;
  addressCountry?: Maybe<Scalars['String']>;
  address_func?: Maybe<Count_Functions>;
  brand?: Maybe<Scalars['JSON']>;
  brand_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  is_archived?: Maybe<Scalars['Boolean']>;
  markup_schema?: Maybe<Scalars['JSON']>;
  markup_schema_func?: Maybe<Count_Functions>;
  page_type?: Maybe<Scalars['String']>;
  page_type_for_markup?: Maybe<Scalars['String']>;
  publisher?: Maybe<Publishers>;
  slug?: Maybe<Scalars['String']>;
};


export type PagesFaQsArgs = {
  filter?: InputMaybe<Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PagesPublisherArgs = {
  filter?: InputMaybe<Publishers_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Pages_Aggregated = {
  __typename?: 'pages_aggregated';
  avg?: Maybe<Pages_Aggregated_Fields>;
  avgDistinct?: Maybe<Pages_Aggregated_Fields>;
  count?: Maybe<Pages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Pages_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Pages_Aggregated_Fields>;
  min?: Maybe<Pages_Aggregated_Fields>;
  sum?: Maybe<Pages_Aggregated_Fields>;
  sumDistinct?: Maybe<Pages_Aggregated_Fields>;
};

export type Pages_Aggregated_Count = {
  __typename?: 'pages_aggregated_count';
  FAQs?: Maybe<Scalars['Int']>;
  about?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['Int']>;
  addressCountry?: Maybe<Scalars['Int']>;
  brand?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  headline?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_archived?: Maybe<Scalars['Int']>;
  markup_schema?: Maybe<Scalars['Int']>;
  page_type?: Maybe<Scalars['Int']>;
  page_type_for_markup?: Maybe<Scalars['Int']>;
  publisher?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
};

export type Pages_Aggregated_Fields = {
  __typename?: 'pages_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  publisher?: Maybe<Scalars['Float']>;
};

export type Pages_Filter = {
  FAQs?: InputMaybe<Faqs_Filter>;
  FAQs_func?: InputMaybe<Count_Function_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<Pages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Pages_Filter>>>;
  about?: InputMaybe<String_Filter_Operators>;
  address?: InputMaybe<String_Filter_Operators>;
  addressCountry?: InputMaybe<String_Filter_Operators>;
  address_func?: InputMaybe<Count_Function_Filter_Operators>;
  brand?: InputMaybe<String_Filter_Operators>;
  brand_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  is_archived?: InputMaybe<Boolean_Filter_Operators>;
  markup_schema?: InputMaybe<String_Filter_Operators>;
  markup_schema_func?: InputMaybe<Count_Function_Filter_Operators>;
  page_type?: InputMaybe<String_Filter_Operators>;
  page_type_for_markup?: InputMaybe<String_Filter_Operators>;
  publisher?: InputMaybe<Publishers_Filter>;
  slug?: InputMaybe<String_Filter_Operators>;
};

export type Posts = {
  __typename?: 'posts';
  availability_page?: Maybe<Availability_Pages>;
  booking_page?: Maybe<Booking_Pages>;
  city?: Maybe<Cities>;
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  created_at_func?: Maybe<Datetime_Functions>;
  created_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  is_archived?: Maybe<Scalars['Boolean']>;
  suburb?: Maybe<Suburbs>;
  updated_at?: Maybe<Scalars['Date']>;
  updated_at_func?: Maybe<Datetime_Functions>;
  updated_by?: Maybe<Scalars['Int']>;
};


export type PostsAvailability_PageArgs = {
  filter?: InputMaybe<Availability_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PostsBooking_PageArgs = {
  filter?: InputMaybe<Booking_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PostsCityArgs = {
  filter?: InputMaybe<Cities_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PostsSuburbArgs = {
  filter?: InputMaybe<Suburbs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Posts_Aggregated = {
  __typename?: 'posts_aggregated';
  avg?: Maybe<Posts_Aggregated_Fields>;
  avgDistinct?: Maybe<Posts_Aggregated_Fields>;
  count?: Maybe<Posts_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Posts_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Posts_Aggregated_Fields>;
  min?: Maybe<Posts_Aggregated_Fields>;
  sum?: Maybe<Posts_Aggregated_Fields>;
  sumDistinct?: Maybe<Posts_Aggregated_Fields>;
};

export type Posts_Aggregated_Count = {
  __typename?: 'posts_aggregated_count';
  availability_page?: Maybe<Scalars['Int']>;
  booking_page?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_archived?: Maybe<Scalars['Int']>;
  suburb?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

export type Posts_Aggregated_Fields = {
  __typename?: 'posts_aggregated_fields';
  availability_page?: Maybe<Scalars['Float']>;
  booking_page?: Maybe<Scalars['Float']>;
  city?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  suburb?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

export type Posts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Posts_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Posts_Filter>>>;
  availability_page?: InputMaybe<Availability_Pages_Filter>;
  booking_page?: InputMaybe<Booking_Pages_Filter>;
  city?: InputMaybe<Cities_Filter>;
  content?: InputMaybe<String_Filter_Operators>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  created_by?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  is_archived?: InputMaybe<Boolean_Filter_Operators>;
  suburb?: InputMaybe<Suburbs_Filter>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  updated_by?: InputMaybe<Number_Filter_Operators>;
};

export type Publishers = {
  __typename?: 'publishers';
  articles?: Maybe<Array<Maybe<Articles>>>;
  articles_func?: Maybe<Count_Functions>;
  content_creators?: Maybe<Array<Maybe<Content_Creators>>>;
  content_creators_func?: Maybe<Count_Functions>;
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  profiles?: Maybe<Scalars['JSON']>;
  profiles_func?: Maybe<Count_Functions>;
  publishing_principles?: Maybe<Scalars['String']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type PublishersArticlesArgs = {
  filter?: InputMaybe<Articles_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PublishersContent_CreatorsArgs = {
  filter?: InputMaybe<Content_Creators_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PublishersUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type PublishersUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Publishers_Aggregated = {
  __typename?: 'publishers_aggregated';
  avg?: Maybe<Publishers_Aggregated_Fields>;
  avgDistinct?: Maybe<Publishers_Aggregated_Fields>;
  count?: Maybe<Publishers_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Publishers_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Publishers_Aggregated_Fields>;
  min?: Maybe<Publishers_Aggregated_Fields>;
  sum?: Maybe<Publishers_Aggregated_Fields>;
  sumDistinct?: Maybe<Publishers_Aggregated_Fields>;
};

export type Publishers_Aggregated_Count = {
  __typename?: 'publishers_aggregated_count';
  articles?: Maybe<Scalars['Int']>;
  content_creators?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  profiles?: Maybe<Scalars['Int']>;
  publishing_principles?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Publishers_Aggregated_Fields = {
  __typename?: 'publishers_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Publishers_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Publishers_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Publishers_Filter>>>;
  articles?: InputMaybe<Articles_Filter>;
  articles_func?: InputMaybe<Count_Function_Filter_Operators>;
  content_creators?: InputMaybe<Content_Creators_Filter>;
  content_creators_func?: InputMaybe<Count_Function_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  profiles?: InputMaybe<String_Filter_Operators>;
  profiles_func?: InputMaybe<Count_Function_Filter_Operators>;
  publishing_principles?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Redirects = {
  __typename?: 'redirects';
  date_created?: Maybe<Scalars['Date']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  from?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  is_archived?: Maybe<Scalars['Boolean']>;
  to?: Maybe<Scalars['String']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type RedirectsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type RedirectsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Redirects_Aggregated = {
  __typename?: 'redirects_aggregated';
  avg?: Maybe<Redirects_Aggregated_Fields>;
  avgDistinct?: Maybe<Redirects_Aggregated_Fields>;
  count?: Maybe<Redirects_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Redirects_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Redirects_Aggregated_Fields>;
  min?: Maybe<Redirects_Aggregated_Fields>;
  sum?: Maybe<Redirects_Aggregated_Fields>;
  sumDistinct?: Maybe<Redirects_Aggregated_Fields>;
};

export type Redirects_Aggregated_Count = {
  __typename?: 'redirects_aggregated_count';
  date_created?: Maybe<Scalars['Int']>;
  date_updated?: Maybe<Scalars['Int']>;
  from?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_archived?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
  user_created?: Maybe<Scalars['Int']>;
  user_updated?: Maybe<Scalars['Int']>;
};

export type Redirects_Aggregated_Fields = {
  __typename?: 'redirects_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Redirects_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Redirects_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Redirects_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  from?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  is_archived?: InputMaybe<Boolean_Filter_Operators>;
  to?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Seopage_Links = {
  __typename?: 'seopage_links';
  booking_page?: Maybe<Booking_Pages>;
  city?: Maybe<Cities>;
  created_at?: Maybe<Scalars['Date']>;
  created_at_func?: Maybe<Datetime_Functions>;
  created_by?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  is_archived?: Maybe<Scalars['Boolean']>;
  link?: Maybe<Scalars['String']>;
  link_text: Scalars['String'];
  link_type?: Maybe<Scalars['String']>;
  state?: Maybe<States>;
  updated_at?: Maybe<Scalars['Date']>;
  updated_at_func?: Maybe<Datetime_Functions>;
  updated_by?: Maybe<Scalars['Int']>;
};


export type Seopage_LinksBooking_PageArgs = {
  filter?: InputMaybe<Booking_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Seopage_LinksCityArgs = {
  filter?: InputMaybe<Cities_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Seopage_LinksStateArgs = {
  filter?: InputMaybe<States_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Seopage_Links_Aggregated = {
  __typename?: 'seopage_links_aggregated';
  avg?: Maybe<Seopage_Links_Aggregated_Fields>;
  avgDistinct?: Maybe<Seopage_Links_Aggregated_Fields>;
  count?: Maybe<Seopage_Links_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Seopage_Links_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Seopage_Links_Aggregated_Fields>;
  min?: Maybe<Seopage_Links_Aggregated_Fields>;
  sum?: Maybe<Seopage_Links_Aggregated_Fields>;
  sumDistinct?: Maybe<Seopage_Links_Aggregated_Fields>;
};

export type Seopage_Links_Aggregated_Count = {
  __typename?: 'seopage_links_aggregated_count';
  booking_page?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_archived?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['Int']>;
  link_text?: Maybe<Scalars['Int']>;
  link_type?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

export type Seopage_Links_Aggregated_Fields = {
  __typename?: 'seopage_links_aggregated_fields';
  booking_page?: Maybe<Scalars['Float']>;
  city?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

export type Seopage_Links_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Seopage_Links_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Seopage_Links_Filter>>>;
  booking_page?: InputMaybe<Booking_Pages_Filter>;
  city?: InputMaybe<Cities_Filter>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  created_by?: InputMaybe<Number_Filter_Operators>;
  heading?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  is_archived?: InputMaybe<Boolean_Filter_Operators>;
  link?: InputMaybe<String_Filter_Operators>;
  link_text?: InputMaybe<String_Filter_Operators>;
  link_type?: InputMaybe<String_Filter_Operators>;
  state?: InputMaybe<States_Filter>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  updated_by?: InputMaybe<Number_Filter_Operators>;
};

export type Sitemap_Page_Sections = {
  __typename?: 'sitemap_page_sections';
  created_at?: Maybe<Scalars['Date']>;
  created_at_func?: Maybe<Datetime_Functions>;
  created_by?: Maybe<Scalars['Int']>;
  h2?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  section_links?: Maybe<Array<Maybe<Sitemap_Section_Links>>>;
  section_links_func?: Maybe<Count_Functions>;
  sitemap_page?: Maybe<Sitemap_Pages>;
  updated_at?: Maybe<Scalars['Date']>;
  updated_at_func?: Maybe<Datetime_Functions>;
  updated_by?: Maybe<Scalars['Int']>;
};


export type Sitemap_Page_SectionsSection_LinksArgs = {
  filter?: InputMaybe<Sitemap_Section_Links_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Sitemap_Page_SectionsSitemap_PageArgs = {
  filter?: InputMaybe<Sitemap_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Sitemap_Page_Sections_Aggregated = {
  __typename?: 'sitemap_page_sections_aggregated';
  avg?: Maybe<Sitemap_Page_Sections_Aggregated_Fields>;
  avgDistinct?: Maybe<Sitemap_Page_Sections_Aggregated_Fields>;
  count?: Maybe<Sitemap_Page_Sections_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Sitemap_Page_Sections_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Sitemap_Page_Sections_Aggregated_Fields>;
  min?: Maybe<Sitemap_Page_Sections_Aggregated_Fields>;
  sum?: Maybe<Sitemap_Page_Sections_Aggregated_Fields>;
  sumDistinct?: Maybe<Sitemap_Page_Sections_Aggregated_Fields>;
};

export type Sitemap_Page_Sections_Aggregated_Count = {
  __typename?: 'sitemap_page_sections_aggregated_count';
  created_at?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  h2?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  section_links?: Maybe<Scalars['Int']>;
  sitemap_page?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

export type Sitemap_Page_Sections_Aggregated_Fields = {
  __typename?: 'sitemap_page_sections_aggregated_fields';
  created_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sitemap_page?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

export type Sitemap_Page_Sections_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Sitemap_Page_Sections_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Sitemap_Page_Sections_Filter>>>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  created_by?: InputMaybe<Number_Filter_Operators>;
  h2?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  section_links?: InputMaybe<Sitemap_Section_Links_Filter>;
  section_links_func?: InputMaybe<Count_Function_Filter_Operators>;
  sitemap_page?: InputMaybe<Sitemap_Pages_Filter>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  updated_by?: InputMaybe<Number_Filter_Operators>;
};

export type Sitemap_Pages = {
  __typename?: 'sitemap_pages';
  created_at?: Maybe<Scalars['Date']>;
  created_at_func?: Maybe<Datetime_Functions>;
  created_by?: Maybe<Scalars['Int']>;
  h1?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  meta_title?: Maybe<Scalars['String']>;
  page_sections?: Maybe<Array<Maybe<Sitemap_Page_Sections>>>;
  page_sections_func?: Maybe<Count_Functions>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  updated_at_func?: Maybe<Datetime_Functions>;
  updated_by?: Maybe<Scalars['Int']>;
};


export type Sitemap_PagesPage_SectionsArgs = {
  filter?: InputMaybe<Sitemap_Page_Sections_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Sitemap_Pages_Aggregated = {
  __typename?: 'sitemap_pages_aggregated';
  avg?: Maybe<Sitemap_Pages_Aggregated_Fields>;
  avgDistinct?: Maybe<Sitemap_Pages_Aggregated_Fields>;
  count?: Maybe<Sitemap_Pages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Sitemap_Pages_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Sitemap_Pages_Aggregated_Fields>;
  min?: Maybe<Sitemap_Pages_Aggregated_Fields>;
  sum?: Maybe<Sitemap_Pages_Aggregated_Fields>;
  sumDistinct?: Maybe<Sitemap_Pages_Aggregated_Fields>;
};

export type Sitemap_Pages_Aggregated_Count = {
  __typename?: 'sitemap_pages_aggregated_count';
  created_at?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  h1?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  meta_title?: Maybe<Scalars['Int']>;
  page_sections?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

export type Sitemap_Pages_Aggregated_Fields = {
  __typename?: 'sitemap_pages_aggregated_fields';
  created_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

export type Sitemap_Pages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Sitemap_Pages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Sitemap_Pages_Filter>>>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  created_by?: InputMaybe<Number_Filter_Operators>;
  h1?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  meta_title?: InputMaybe<String_Filter_Operators>;
  page_sections?: InputMaybe<Sitemap_Page_Sections_Filter>;
  page_sections_func?: InputMaybe<Count_Function_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  updated_by?: InputMaybe<Number_Filter_Operators>;
};

export type Sitemap_Section_Links = {
  __typename?: 'sitemap_section_links';
  availability_page?: Maybe<Availability_Pages>;
  created_at?: Maybe<Scalars['Date']>;
  created_at_func?: Maybe<Datetime_Functions>;
  created_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  link?: Maybe<Scalars['String']>;
  link_text?: Maybe<Scalars['String']>;
  sitemap_pagesection?: Maybe<Sitemap_Page_Sections>;
  updated_at?: Maybe<Scalars['Date']>;
  updated_at_func?: Maybe<Datetime_Functions>;
  updated_by?: Maybe<Scalars['Int']>;
};


export type Sitemap_Section_LinksAvailability_PageArgs = {
  filter?: InputMaybe<Availability_Pages_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Sitemap_Section_LinksSitemap_PagesectionArgs = {
  filter?: InputMaybe<Sitemap_Page_Sections_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Sitemap_Section_Links_Aggregated = {
  __typename?: 'sitemap_section_links_aggregated';
  avg?: Maybe<Sitemap_Section_Links_Aggregated_Fields>;
  avgDistinct?: Maybe<Sitemap_Section_Links_Aggregated_Fields>;
  count?: Maybe<Sitemap_Section_Links_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Sitemap_Section_Links_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Sitemap_Section_Links_Aggregated_Fields>;
  min?: Maybe<Sitemap_Section_Links_Aggregated_Fields>;
  sum?: Maybe<Sitemap_Section_Links_Aggregated_Fields>;
  sumDistinct?: Maybe<Sitemap_Section_Links_Aggregated_Fields>;
};

export type Sitemap_Section_Links_Aggregated_Count = {
  __typename?: 'sitemap_section_links_aggregated_count';
  availability_page?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['Int']>;
  link_text?: Maybe<Scalars['Int']>;
  sitemap_pagesection?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

export type Sitemap_Section_Links_Aggregated_Fields = {
  __typename?: 'sitemap_section_links_aggregated_fields';
  availability_page?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sitemap_pagesection?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

export type Sitemap_Section_Links_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Sitemap_Section_Links_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Sitemap_Section_Links_Filter>>>;
  availability_page?: InputMaybe<Availability_Pages_Filter>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  created_by?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  link?: InputMaybe<String_Filter_Operators>;
  link_text?: InputMaybe<String_Filter_Operators>;
  sitemap_pagesection?: InputMaybe<Sitemap_Page_Sections_Filter>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  updated_by?: InputMaybe<Number_Filter_Operators>;
};

export type States = {
  __typename?: 'states';
  Cities?: Maybe<Array<Maybe<Cities>>>;
  Cities_func?: Maybe<Count_Functions>;
  Clinics?: Maybe<Array<Maybe<Clinics>>>;
  Clinics_func?: Maybe<Count_Functions>;
  Seo_page_links?: Maybe<Array<Maybe<Seopage_Links>>>;
  Seo_page_links_func?: Maybe<Count_Functions>;
  Suburbs?: Maybe<Array<Maybe<Suburbs>>>;
  Suburbs_func?: Maybe<Count_Functions>;
  abbreviation?: Maybe<Scalars['String']>;
  breadcrumbs?: Maybe<Scalars['JSON']>;
  breadcrumbs_func?: Maybe<Count_Functions>;
  content_creators?: Maybe<Array<Maybe<Content_Creators>>>;
  content_creators_func?: Maybe<Count_Functions>;
  created_at?: Maybe<Scalars['Date']>;
  created_at_func?: Maybe<Datetime_Functions>;
  created_by?: Maybe<Scalars['Int']>;
  h1?: Maybe<Scalars['String']>;
  h2?: Maybe<Scalars['String']>;
  h3?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  is_archived?: Maybe<Scalars['Boolean']>;
  meta_description?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  sub_heading_text?: Maybe<Scalars['String']>;
  tick_1?: Maybe<Scalars['String']>;
  tick_2?: Maybe<Scalars['String']>;
  tick_3?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  updated_at_func?: Maybe<Datetime_Functions>;
  updated_by?: Maybe<Scalars['Int']>;
};


export type StatesCitiesArgs = {
  filter?: InputMaybe<Cities_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type StatesClinicsArgs = {
  filter?: InputMaybe<Clinics_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type StatesSeo_Page_LinksArgs = {
  filter?: InputMaybe<Seopage_Links_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type StatesSuburbsArgs = {
  filter?: InputMaybe<Suburbs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type StatesContent_CreatorsArgs = {
  filter?: InputMaybe<Content_Creators_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type States_Aggregated = {
  __typename?: 'states_aggregated';
  avg?: Maybe<States_Aggregated_Fields>;
  avgDistinct?: Maybe<States_Aggregated_Fields>;
  count?: Maybe<States_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<States_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<States_Aggregated_Fields>;
  min?: Maybe<States_Aggregated_Fields>;
  sum?: Maybe<States_Aggregated_Fields>;
  sumDistinct?: Maybe<States_Aggregated_Fields>;
};

export type States_Aggregated_Count = {
  __typename?: 'states_aggregated_count';
  Cities?: Maybe<Scalars['Int']>;
  Clinics?: Maybe<Scalars['Int']>;
  Seo_page_links?: Maybe<Scalars['Int']>;
  Suburbs?: Maybe<Scalars['Int']>;
  abbreviation?: Maybe<Scalars['Int']>;
  breadcrumbs?: Maybe<Scalars['Int']>;
  content_creators?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  h1?: Maybe<Scalars['Int']>;
  h2?: Maybe<Scalars['Int']>;
  h3?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_archived?: Maybe<Scalars['Int']>;
  meta_description?: Maybe<Scalars['Int']>;
  meta_title?: Maybe<Scalars['Int']>;
  profile?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  sub_heading_text?: Maybe<Scalars['Int']>;
  tick_1?: Maybe<Scalars['Int']>;
  tick_2?: Maybe<Scalars['Int']>;
  tick_3?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

export type States_Aggregated_Fields = {
  __typename?: 'states_aggregated_fields';
  created_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

export type States_Filter = {
  Cities?: InputMaybe<Cities_Filter>;
  Cities_func?: InputMaybe<Count_Function_Filter_Operators>;
  Clinics?: InputMaybe<Clinics_Filter>;
  Clinics_func?: InputMaybe<Count_Function_Filter_Operators>;
  Seo_page_links?: InputMaybe<Seopage_Links_Filter>;
  Seo_page_links_func?: InputMaybe<Count_Function_Filter_Operators>;
  Suburbs?: InputMaybe<Suburbs_Filter>;
  Suburbs_func?: InputMaybe<Count_Function_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<States_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<States_Filter>>>;
  abbreviation?: InputMaybe<String_Filter_Operators>;
  breadcrumbs?: InputMaybe<String_Filter_Operators>;
  breadcrumbs_func?: InputMaybe<Count_Function_Filter_Operators>;
  content_creators?: InputMaybe<Content_Creators_Filter>;
  content_creators_func?: InputMaybe<Count_Function_Filter_Operators>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  created_by?: InputMaybe<Number_Filter_Operators>;
  h1?: InputMaybe<String_Filter_Operators>;
  h2?: InputMaybe<String_Filter_Operators>;
  h3?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  is_archived?: InputMaybe<Boolean_Filter_Operators>;
  meta_description?: InputMaybe<String_Filter_Operators>;
  meta_title?: InputMaybe<String_Filter_Operators>;
  profile?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  sub_heading_text?: InputMaybe<String_Filter_Operators>;
  tick_1?: InputMaybe<String_Filter_Operators>;
  tick_2?: InputMaybe<String_Filter_Operators>;
  tick_3?: InputMaybe<String_Filter_Operators>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  updated_by?: InputMaybe<Number_Filter_Operators>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']>;
  _empty?: InputMaybe<Scalars['Boolean']>;
  _ends_with?: InputMaybe<Scalars['String']>;
  _eq?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _ncontains?: InputMaybe<Scalars['String']>;
  _nempty?: InputMaybe<Scalars['Boolean']>;
  _nends_with?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']>;
  _nstarts_with?: InputMaybe<Scalars['String']>;
  _null?: InputMaybe<Scalars['Boolean']>;
  _starts_with?: InputMaybe<Scalars['String']>;
};

export type Suburbs = {
  __typename?: 'suburbs';
  Clinics?: Maybe<Array<Maybe<Clinics>>>;
  Clinics_func?: Maybe<Count_Functions>;
  FAQs?: Maybe<Array<Maybe<Faqs>>>;
  FAQs_func?: Maybe<Count_Functions>;
  Posts?: Maybe<Array<Maybe<Posts>>>;
  Posts_func?: Maybe<Count_Functions>;
  about_bookphysio?: Maybe<Scalars['String']>;
  breadcrumbs?: Maybe<Scalars['JSON']>;
  breadcrumbs_func?: Maybe<Count_Functions>;
  city?: Maybe<Cities>;
  created_at?: Maybe<Scalars['Date']>;
  created_at_func?: Maybe<Datetime_Functions>;
  created_by?: Maybe<Scalars['Int']>;
  h1?: Maybe<Scalars['String']>;
  h2?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  is_archived?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['JSON']>;
  location_func?: Maybe<Count_Functions>;
  markup_schema?: Maybe<Scalars['JSON']>;
  markup_schema_func?: Maybe<Count_Functions>;
  meta_description?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** Clinics that are within 5 km radius counting from suburb location */
  nearby_clinics?: Maybe<Scalars['JSON']>;
  nearby_clinics_func?: Maybe<Count_Functions>;
  nearby_suburbs?: Maybe<Scalars['JSON']>;
  nearby_suburbs_func?: Maybe<Count_Functions>;
  popular?: Maybe<Scalars['Boolean']>;
  postcode?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  state?: Maybe<States>;
  updated_at?: Maybe<Scalars['Date']>;
  updated_at_func?: Maybe<Datetime_Functions>;
  updated_by?: Maybe<Scalars['Int']>;
};


export type SuburbsClinicsArgs = {
  filter?: InputMaybe<Clinics_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SuburbsFaQsArgs = {
  filter?: InputMaybe<Faqs_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SuburbsPostsArgs = {
  filter?: InputMaybe<Posts_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SuburbsCityArgs = {
  filter?: InputMaybe<Cities_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SuburbsStateArgs = {
  filter?: InputMaybe<States_Filter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Suburbs_Aggregated = {
  __typename?: 'suburbs_aggregated';
  avg?: Maybe<Suburbs_Aggregated_Fields>;
  avgDistinct?: Maybe<Suburbs_Aggregated_Fields>;
  count?: Maybe<Suburbs_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Suburbs_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Suburbs_Aggregated_Fields>;
  min?: Maybe<Suburbs_Aggregated_Fields>;
  sum?: Maybe<Suburbs_Aggregated_Fields>;
  sumDistinct?: Maybe<Suburbs_Aggregated_Fields>;
};

export type Suburbs_Aggregated_Count = {
  __typename?: 'suburbs_aggregated_count';
  Clinics?: Maybe<Scalars['Int']>;
  FAQs?: Maybe<Scalars['Int']>;
  Posts?: Maybe<Scalars['Int']>;
  about_bookphysio?: Maybe<Scalars['Int']>;
  breadcrumbs?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  h1?: Maybe<Scalars['Int']>;
  h2?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_archived?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['Int']>;
  markup_schema?: Maybe<Scalars['Int']>;
  meta_description?: Maybe<Scalars['Int']>;
  meta_title?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  /** Clinics that are within 5 km radius counting from suburb location */
  nearby_clinics?: Maybe<Scalars['Int']>;
  nearby_suburbs?: Maybe<Scalars['Int']>;
  popular?: Maybe<Scalars['Int']>;
  postcode?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

export type Suburbs_Aggregated_Fields = {
  __typename?: 'suburbs_aggregated_fields';
  city?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

export type Suburbs_Filter = {
  Clinics?: InputMaybe<Clinics_Filter>;
  Clinics_func?: InputMaybe<Count_Function_Filter_Operators>;
  FAQs?: InputMaybe<Faqs_Filter>;
  FAQs_func?: InputMaybe<Count_Function_Filter_Operators>;
  Posts?: InputMaybe<Posts_Filter>;
  Posts_func?: InputMaybe<Count_Function_Filter_Operators>;
  _and?: InputMaybe<Array<InputMaybe<Suburbs_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Suburbs_Filter>>>;
  about_bookphysio?: InputMaybe<String_Filter_Operators>;
  breadcrumbs?: InputMaybe<String_Filter_Operators>;
  breadcrumbs_func?: InputMaybe<Count_Function_Filter_Operators>;
  city?: InputMaybe<Cities_Filter>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  created_by?: InputMaybe<Number_Filter_Operators>;
  h1?: InputMaybe<String_Filter_Operators>;
  h2?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  is_archived?: InputMaybe<Boolean_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  location_func?: InputMaybe<Count_Function_Filter_Operators>;
  markup_schema?: InputMaybe<String_Filter_Operators>;
  markup_schema_func?: InputMaybe<Count_Function_Filter_Operators>;
  meta_description?: InputMaybe<String_Filter_Operators>;
  meta_title?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  nearby_clinics?: InputMaybe<String_Filter_Operators>;
  nearby_clinics_func?: InputMaybe<Count_Function_Filter_Operators>;
  nearby_suburbs?: InputMaybe<String_Filter_Operators>;
  nearby_suburbs_func?: InputMaybe<Count_Function_Filter_Operators>;
  popular?: InputMaybe<Boolean_Filter_Operators>;
  postcode?: InputMaybe<String_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  state?: InputMaybe<States_Filter>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  updated_by?: InputMaybe<Number_Filter_Operators>;
};

export type Tokens = {
  __typename?: 'tokens';
  created_at?: Maybe<Scalars['Date']>;
  created_at_func?: Maybe<Datetime_Functions>;
  created_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  token?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  updated_at_func?: Maybe<Datetime_Functions>;
  updated_by?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['Int']>;
};

export type Tokens_Aggregated = {
  __typename?: 'tokens_aggregated';
  avg?: Maybe<Tokens_Aggregated_Fields>;
  avgDistinct?: Maybe<Tokens_Aggregated_Fields>;
  count?: Maybe<Tokens_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Tokens_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Tokens_Aggregated_Fields>;
  min?: Maybe<Tokens_Aggregated_Fields>;
  sum?: Maybe<Tokens_Aggregated_Fields>;
  sumDistinct?: Maybe<Tokens_Aggregated_Fields>;
};

export type Tokens_Aggregated_Count = {
  __typename?: 'tokens_aggregated_count';
  created_at?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
  user?: Maybe<Scalars['Int']>;
};

export type Tokens_Aggregated_Fields = {
  __typename?: 'tokens_aggregated_fields';
  created_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  user?: Maybe<Scalars['Float']>;
};

export type Tokens_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Tokens_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Tokens_Filter>>>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  created_by?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  token?: InputMaybe<String_Filter_Operators>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  updated_by?: InputMaybe<Number_Filter_Operators>;
  user?: InputMaybe<Number_Filter_Operators>;
};

export type Update_Appointments_Input = {
  cancelled?: InputMaybe<Scalars['String']>;
  clinic?: InputMaybe<Update_Clinics_Input>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  did_not_arrive?: InputMaybe<Scalars['Boolean']>;
  ends_at?: InputMaybe<Scalars['Date']>;
  ends_at_func?: InputMaybe<Datetime_FunctionsInput>;
  existing_patient?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  patient?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_data?: InputMaybe<Scalars['String']>;
  starts_at?: InputMaybe<Scalars['Date']>;
  starts_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Update_Articles_Content_Creators_2_Input = {
  articles_id?: InputMaybe<Update_Articles_Input>;
  content_creators_id?: InputMaybe<Update_Content_Creators_Input>;
  id?: InputMaybe<Scalars['ID']>;
};

export type Update_Articles_Content_Creators_3_Input = {
  articles_id?: InputMaybe<Update_Articles_Input>;
  content_creators_id?: InputMaybe<Update_Content_Creators_Input>;
  id?: InputMaybe<Scalars['ID']>;
};

export type Update_Articles_Content_Creators_4_Input = {
  articles_id?: InputMaybe<Update_Articles_Input>;
  content_creators_id?: InputMaybe<Update_Content_Creators_Input>;
  id?: InputMaybe<Scalars['ID']>;
};

export type Update_Articles_Input = {
  anchor_sitemap?: InputMaybe<Update_Sitemap_Section_Links_Input>;
  audience?: InputMaybe<Scalars['JSON']>;
  audience_func?: InputMaybe<Count_FunctionsInput>;
  authors?: InputMaybe<Array<InputMaybe<Update_Articles_Content_Creators_2_Input>>>;
  authors_func?: InputMaybe<Count_FunctionsInput>;
  autoupdate_anchor?: InputMaybe<Scalars['Boolean']>;
  categories?: InputMaybe<Scalars['JSON']>;
  categories_func?: InputMaybe<Count_FunctionsInput>;
  citations?: InputMaybe<Scalars['JSON']>;
  citations_func?: InputMaybe<Count_FunctionsInput>;
  content?: InputMaybe<Scalars['String']>;
  contributed_at?: InputMaybe<Scalars['Date']>;
  contributed_at_func?: InputMaybe<Datetime_FunctionsInput>;
  contributors?: InputMaybe<Array<InputMaybe<Update_Articles_Content_Creators_4_Input>>>;
  contributors_func?: InputMaybe<Count_FunctionsInput>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  heading?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Update_Directus_Files_Input>;
  image_alt_text?: InputMaybe<Scalars['String']>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  keywords?: InputMaybe<Scalars['JSON']>;
  keywords_func?: InputMaybe<Count_FunctionsInput>;
  last_reviewed?: InputMaybe<Scalars['Date']>;
  last_reviewed_func?: InputMaybe<Datetime_FunctionsInput>;
  markup_schema?: InputMaybe<Scalars['JSON']>;
  markup_schema_func?: InputMaybe<Count_FunctionsInput>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Update_Publishers_Input>;
  reviewers?: InputMaybe<Array<InputMaybe<Update_Articles_Content_Creators_3_Input>>>;
  reviewers_func?: InputMaybe<Count_FunctionsInput>;
  slug?: InputMaybe<Scalars['String']>;
  sub_heading?: InputMaybe<Scalars['String']>;
  table_of_contents?: InputMaybe<Scalars['JSON']>;
  table_of_contents_func?: InputMaybe<Count_FunctionsInput>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Update_Availability_Pages_Input = {
  FAQs?: InputMaybe<Array<InputMaybe<Update_Faqs_Input>>>;
  FAQs_func?: InputMaybe<Count_FunctionsInput>;
  about_bookphysio?: InputMaybe<Scalars['String']>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  popular_links?: InputMaybe<Array<InputMaybe<Update_Sitemap_Section_Links_Input>>>;
  popular_links_func?: InputMaybe<Count_FunctionsInput>;
  posts?: InputMaybe<Array<InputMaybe<Update_Posts_Input>>>;
  posts_func?: InputMaybe<Count_FunctionsInput>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Update_Booking_Pages_Input = {
  FAQs?: InputMaybe<Array<InputMaybe<Update_Faqs_Input>>>;
  FAQs_func?: InputMaybe<Count_FunctionsInput>;
  Seo_page_links?: InputMaybe<Array<InputMaybe<Update_Seopage_Links_Input>>>;
  Seo_page_links_func?: InputMaybe<Count_FunctionsInput>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  h1?: InputMaybe<Scalars['String']>;
  h2?: InputMaybe<Scalars['String']>;
  h3?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  markup_schema?: InputMaybe<Scalars['JSON']>;
  markup_schema_func?: InputMaybe<Count_FunctionsInput>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<Array<InputMaybe<Update_Posts_Input>>>;
  posts_func?: InputMaybe<Count_FunctionsInput>;
  slug?: InputMaybe<Scalars['String']>;
  sub_heading_text?: InputMaybe<Scalars['String']>;
  tick_1?: InputMaybe<Scalars['String']>;
  tick_2?: InputMaybe<Scalars['String']>;
  tick_3?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Update_Cities_Input = {
  Clinics?: InputMaybe<Array<InputMaybe<Update_Clinics_Input>>>;
  Clinics_func?: InputMaybe<Count_FunctionsInput>;
  FAQs?: InputMaybe<Array<InputMaybe<Update_Faqs_Input>>>;
  FAQs_func?: InputMaybe<Count_FunctionsInput>;
  Posts?: InputMaybe<Array<InputMaybe<Update_Posts_Input>>>;
  Posts_func?: InputMaybe<Count_FunctionsInput>;
  Seo_page_links?: InputMaybe<Array<InputMaybe<Update_Seopage_Links_Input>>>;
  Seo_page_links_func?: InputMaybe<Count_FunctionsInput>;
  Suburbs?: InputMaybe<Array<InputMaybe<Update_Suburbs_Input>>>;
  Suburbs_func?: InputMaybe<Count_FunctionsInput>;
  about_bookphysio?: InputMaybe<Scalars['String']>;
  breadcrumbs?: InputMaybe<Scalars['JSON']>;
  breadcrumbs_func?: InputMaybe<Count_FunctionsInput>;
  content_creators?: InputMaybe<Array<InputMaybe<Update_Content_Creators_Input>>>;
  content_creators_func?: InputMaybe<Count_FunctionsInput>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  h1?: InputMaybe<Scalars['String']>;
  h2?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  markup_schema?: InputMaybe<Scalars['JSON']>;
  markup_schema_func?: InputMaybe<Count_FunctionsInput>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Update_States_Input>;
  sub_heading_text?: InputMaybe<Scalars['String']>;
  tick_1?: InputMaybe<Scalars['String']>;
  tick_2?: InputMaybe<Scalars['String']>;
  tick_3?: InputMaybe<Scalars['String']>;
  top_clinics?: InputMaybe<Scalars['JSON']>;
  top_clinics_func?: InputMaybe<Count_FunctionsInput>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Update_Clinics_Input = {
  Appointments?: InputMaybe<Array<InputMaybe<Update_Appointments_Input>>>;
  Appointments_func?: InputMaybe<Count_FunctionsInput>;
  about_clinic?: InputMaybe<Scalars['String']>;
  active_appointment_types_count?: InputMaybe<Scalars['Int']>;
  api_key?: InputMaybe<Scalars['String']>;
  appointment_types?: InputMaybe<Scalars['JSON']>;
  appointment_types_func?: InputMaybe<Count_FunctionsInput>;
  chargebee_customer_id?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Update_Cities_Input>;
  clinic_booking_link?: InputMaybe<Scalars['String']>;
  clinic_email?: InputMaybe<Scalars['String']>;
  clinic_phone_number?: InputMaybe<Scalars['String']>;
  clinic_practitioners?: InputMaybe<Array<InputMaybe<Update_Clinics_Practitioners_Clinics_Input>>>;
  clinic_practitioners_func?: InputMaybe<Count_FunctionsInput>;
  connected_to_provider?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  display_for_booking?: InputMaybe<Scalars['Boolean']>;
  full_address?: InputMaybe<Scalars['String']>;
  has_appointment_cost?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  id_from_provider?: InputMaybe<Scalars['String']>;
  images_data?: InputMaybe<Scalars['JSON']>;
  images_data_func?: InputMaybe<Count_FunctionsInput>;
  invoices?: InputMaybe<Array<InputMaybe<Update_Invoices_Input>>>;
  invoices_func?: InputMaybe<Count_FunctionsInput>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  is_data_valid?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<Scalars['JSON']>;
  location_func?: InputMaybe<Count_FunctionsInput>;
  logo?: InputMaybe<Update_Directus_Files_Input>;
  logo_alt_text?: InputMaybe<Scalars['String']>;
  markup_schema?: InputMaybe<Scalars['JSON']>;
  markup_schema_func?: InputMaybe<Count_FunctionsInput>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** Clinics that are within 5 km radius counting from clinic location */
  nearby_clinics?: InputMaybe<Scalars['JSON']>;
  nearby_clinics_func?: InputMaybe<Count_FunctionsInput>;
  nearby_suburbs?: InputMaybe<Scalars['JSON']>;
  nearby_suburbs_func?: InputMaybe<Count_FunctionsInput>;
  opening_hours?: InputMaybe<Scalars['JSON']>;
  opening_hours_func?: InputMaybe<Count_FunctionsInput>;
  owner?: InputMaybe<Update_Clinics_Owners_Input>;
  pms?: InputMaybe<Scalars['String']>;
  popular?: InputMaybe<Scalars['Boolean']>;
  postcode?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Update_States_Input>;
  suburb?: InputMaybe<Update_Suburbs_Input>;
  team_image?: InputMaybe<Update_Directus_Files_Input>;
  team_image_alt_text?: InputMaybe<Scalars['String']>;
  time_zone?: InputMaybe<Scalars['String']>;
  typeform_registration_link?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
  use_test_chargebee?: InputMaybe<Scalars['Boolean']>;
  validation_description?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type Update_Clinics_Owners_Input = {
  clinics?: InputMaybe<Array<InputMaybe<Update_Clinics_Input>>>;
  clinics_func?: InputMaybe<Count_FunctionsInput>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  last_name?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  sign_up_date?: InputMaybe<Scalars['Date']>;
  sign_up_date_func?: InputMaybe<Date_FunctionsInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type Update_Clinics_Practitioners_Clinics_Input = {
  clinics_id?: InputMaybe<Update_Clinics_Input>;
  clinics_practitioners_id?: InputMaybe<Update_Clinics_Practitioners_Input>;
  id?: InputMaybe<Scalars['ID']>;
};

export type Update_Clinics_Practitioners_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  available_for_bookings?: InputMaybe<Scalars['Boolean']>;
  clinics?: InputMaybe<Array<InputMaybe<Update_Clinics_Practitioners_Clinics_Input>>>;
  clinics_func?: InputMaybe<Count_FunctionsInput>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  first_name?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  last_name?: InputMaybe<Scalars['String']>;
  provider_id?: InputMaybe<Scalars['String']>;
  related_appointment_types?: InputMaybe<Scalars['JSON']>;
  related_appointment_types_func?: InputMaybe<Count_FunctionsInput>;
  speciality?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Update_Content_Creators_Input = {
  accomplishments?: InputMaybe<Scalars['JSON']>;
  accomplishments_func?: InputMaybe<Count_FunctionsInput>;
  areas_of_expertise?: InputMaybe<Scalars['JSON']>;
  areas_of_expertise_func?: InputMaybe<Count_FunctionsInput>;
  articles_authored?: InputMaybe<Array<InputMaybe<Update_Articles_Content_Creators_2_Input>>>;
  articles_authored_func?: InputMaybe<Count_FunctionsInput>;
  articles_contributed?: InputMaybe<Array<InputMaybe<Update_Articles_Content_Creators_4_Input>>>;
  articles_contributed_func?: InputMaybe<Count_FunctionsInput>;
  articles_reviewed?: InputMaybe<Array<InputMaybe<Update_Articles_Content_Creators_3_Input>>>;
  articles_reviewed_func?: InputMaybe<Count_FunctionsInput>;
  certifications?: InputMaybe<Scalars['JSON']>;
  certifications_func?: InputMaybe<Count_FunctionsInput>;
  city?: InputMaybe<Update_Cities_Input>;
  country?: InputMaybe<Update_Countries_Input>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  degrees?: InputMaybe<Scalars['JSON']>;
  degrees_func?: InputMaybe<Count_FunctionsInput>;
  h1?: InputMaybe<Scalars['String']>;
  h2?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  linked_in?: InputMaybe<Scalars['String']>;
  markup_schema?: InputMaybe<Scalars['JSON']>;
  markup_schema_func?: InputMaybe<Count_FunctionsInput>;
  medical_title?: InputMaybe<Scalars['String']>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  mini_description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
  profile_picture?: InputMaybe<Update_Directus_Files_Input>;
  publisher?: InputMaybe<Update_Publishers_Input>;
  slug?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Update_States_Input>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
  website?: InputMaybe<Scalars['String']>;
};

export type Update_Countries_Input = {
  content_creators?: InputMaybe<Array<InputMaybe<Update_Content_Creators_Input>>>;
  content_creators_func?: InputMaybe<Count_FunctionsInput>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  embed?: InputMaybe<Scalars['String']>;
  filename_disk?: InputMaybe<Scalars['String']>;
  filename_download?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Update_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  metadata_func?: InputMaybe<Count_FunctionsInput>;
  modified_by?: InputMaybe<Update_Directus_Users_Input>;
  modified_on?: InputMaybe<Scalars['Date']>;
  modified_on_func?: InputMaybe<Datetime_FunctionsInput>;
  storage?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  tags_func?: InputMaybe<Count_FunctionsInput>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  uploaded_by?: InputMaybe<Update_Directus_Users_Input>;
  uploaded_on?: InputMaybe<Scalars['Date']>;
  uploaded_on_func?: InputMaybe<Datetime_FunctionsInput>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Update_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Update_Directus_Folders_Input>;
};

export type Update_Directus_Roles_Input = {
  admin_access?: InputMaybe<Scalars['Boolean']>;
  app_access?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  enforce_tfa?: InputMaybe<Scalars['Boolean']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Update_Directus_Users_Input>>>;
  users_func?: InputMaybe<Count_FunctionsInput>;
};

export type Update_Directus_Users_Input = {
  auth_data?: InputMaybe<Scalars['JSON']>;
  auth_data_func?: InputMaybe<Count_FunctionsInput>;
  avatar?: InputMaybe<Update_Directus_Files_Input>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  email_notifications?: InputMaybe<Scalars['Boolean']>;
  external_identifier?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  language?: InputMaybe<Scalars['String']>;
  last_access?: InputMaybe<Scalars['Date']>;
  last_access_func?: InputMaybe<Datetime_FunctionsInput>;
  last_name?: InputMaybe<Scalars['String']>;
  last_page?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Update_Directus_Roles_Input>;
  status?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['JSON']>;
  tags_func?: InputMaybe<Count_FunctionsInput>;
  tfa_secret?: InputMaybe<Scalars['String']>;
  theme?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type Update_Faqs_Input = {
  answer?: InputMaybe<Scalars['String']>;
  availability_page?: InputMaybe<Update_Availability_Pages_Input>;
  booking_page?: InputMaybe<Update_Booking_Pages_Input>;
  city?: InputMaybe<Update_Cities_Input>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Update_Pages_Input>;
  question?: InputMaybe<Scalars['String']>;
  suburb?: InputMaybe<Update_Suburbs_Input>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Update_I18n_Locales_Input = {
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Update_Invoices_Input = {
  appointments_ids?: InputMaybe<Scalars['JSON']>;
  appointments_ids_func?: InputMaybe<Count_FunctionsInput>;
  chargebee_id?: InputMaybe<Scalars['String']>;
  clinic?: InputMaybe<Update_Clinics_Input>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
};

export type Update_Pages_Input = {
  FAQs?: InputMaybe<Array<InputMaybe<Update_Faqs_Input>>>;
  FAQs_func?: InputMaybe<Count_FunctionsInput>;
  about?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['JSON']>;
  addressCountry?: InputMaybe<Scalars['String']>;
  address_func?: InputMaybe<Count_FunctionsInput>;
  brand?: InputMaybe<Scalars['JSON']>;
  brand_func?: InputMaybe<Count_FunctionsInput>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  description?: InputMaybe<Scalars['String']>;
  headline?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  markup_schema?: InputMaybe<Scalars['JSON']>;
  markup_schema_func?: InputMaybe<Count_FunctionsInput>;
  page_type?: InputMaybe<Scalars['String']>;
  page_type_for_markup?: InputMaybe<Scalars['String']>;
  publisher?: InputMaybe<Update_Publishers_Input>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Update_Posts_Input = {
  availability_page?: InputMaybe<Update_Availability_Pages_Input>;
  booking_page?: InputMaybe<Update_Booking_Pages_Input>;
  city?: InputMaybe<Update_Cities_Input>;
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  suburb?: InputMaybe<Update_Suburbs_Input>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Update_Publishers_Input = {
  articles?: InputMaybe<Array<InputMaybe<Update_Articles_Input>>>;
  articles_func?: InputMaybe<Count_FunctionsInput>;
  content_creators?: InputMaybe<Array<InputMaybe<Update_Content_Creators_Input>>>;
  content_creators_func?: InputMaybe<Count_FunctionsInput>;
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  profiles?: InputMaybe<Scalars['JSON']>;
  profiles_func?: InputMaybe<Count_FunctionsInput>;
  publishing_principles?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Redirects_Input = {
  date_created?: InputMaybe<Scalars['Date']>;
  date_created_func?: InputMaybe<Datetime_FunctionsInput>;
  date_updated?: InputMaybe<Scalars['Date']>;
  date_updated_func?: InputMaybe<Datetime_FunctionsInput>;
  from?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  to?: InputMaybe<Scalars['String']>;
  user_created?: InputMaybe<Update_Directus_Users_Input>;
  user_updated?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Seopage_Links_Input = {
  booking_page?: InputMaybe<Update_Booking_Pages_Input>;
  city?: InputMaybe<Update_Cities_Input>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  heading?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  link?: InputMaybe<Scalars['String']>;
  link_text?: InputMaybe<Scalars['String']>;
  link_type?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Update_States_Input>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Update_Sitemap_Page_Sections_Input = {
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  h2?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  section_links?: InputMaybe<Array<InputMaybe<Update_Sitemap_Section_Links_Input>>>;
  section_links_func?: InputMaybe<Count_FunctionsInput>;
  sitemap_page?: InputMaybe<Update_Sitemap_Pages_Input>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Update_Sitemap_Pages_Input = {
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  h1?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  meta_title?: InputMaybe<Scalars['String']>;
  page_sections?: InputMaybe<Array<InputMaybe<Update_Sitemap_Page_Sections_Input>>>;
  page_sections_func?: InputMaybe<Count_FunctionsInput>;
  slug?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Update_Sitemap_Section_Links_Input = {
  availability_page?: InputMaybe<Update_Availability_Pages_Input>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  link_text?: InputMaybe<Scalars['String']>;
  sitemap_pagesection?: InputMaybe<Update_Sitemap_Page_Sections_Input>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Update_States_Input = {
  Cities?: InputMaybe<Array<InputMaybe<Update_Cities_Input>>>;
  Cities_func?: InputMaybe<Count_FunctionsInput>;
  Clinics?: InputMaybe<Array<InputMaybe<Update_Clinics_Input>>>;
  Clinics_func?: InputMaybe<Count_FunctionsInput>;
  Seo_page_links?: InputMaybe<Array<InputMaybe<Update_Seopage_Links_Input>>>;
  Seo_page_links_func?: InputMaybe<Count_FunctionsInput>;
  Suburbs?: InputMaybe<Array<InputMaybe<Update_Suburbs_Input>>>;
  Suburbs_func?: InputMaybe<Count_FunctionsInput>;
  abbreviation?: InputMaybe<Scalars['String']>;
  breadcrumbs?: InputMaybe<Scalars['JSON']>;
  breadcrumbs_func?: InputMaybe<Count_FunctionsInput>;
  content_creators?: InputMaybe<Array<InputMaybe<Update_Content_Creators_Input>>>;
  content_creators_func?: InputMaybe<Count_FunctionsInput>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  h1?: InputMaybe<Scalars['String']>;
  h2?: InputMaybe<Scalars['String']>;
  h3?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  sub_heading_text?: InputMaybe<Scalars['String']>;
  tick_1?: InputMaybe<Scalars['String']>;
  tick_2?: InputMaybe<Scalars['String']>;
  tick_3?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Update_Suburbs_Input = {
  Clinics?: InputMaybe<Array<InputMaybe<Update_Clinics_Input>>>;
  Clinics_func?: InputMaybe<Count_FunctionsInput>;
  FAQs?: InputMaybe<Array<InputMaybe<Update_Faqs_Input>>>;
  FAQs_func?: InputMaybe<Count_FunctionsInput>;
  Posts?: InputMaybe<Array<InputMaybe<Update_Posts_Input>>>;
  Posts_func?: InputMaybe<Count_FunctionsInput>;
  about_bookphysio?: InputMaybe<Scalars['String']>;
  breadcrumbs?: InputMaybe<Scalars['JSON']>;
  breadcrumbs_func?: InputMaybe<Count_FunctionsInput>;
  city?: InputMaybe<Update_Cities_Input>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  h1?: InputMaybe<Scalars['String']>;
  h2?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  is_archived?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<Scalars['JSON']>;
  location_func?: InputMaybe<Count_FunctionsInput>;
  markup_schema?: InputMaybe<Scalars['JSON']>;
  markup_schema_func?: InputMaybe<Count_FunctionsInput>;
  meta_description?: InputMaybe<Scalars['String']>;
  meta_title?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** Clinics that are within 5 km radius counting from suburb location */
  nearby_clinics?: InputMaybe<Scalars['JSON']>;
  nearby_clinics_func?: InputMaybe<Count_FunctionsInput>;
  nearby_suburbs?: InputMaybe<Scalars['JSON']>;
  nearby_suburbs_func?: InputMaybe<Count_FunctionsInput>;
  popular?: InputMaybe<Scalars['Boolean']>;
  postcode?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Update_States_Input>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

export type Update_Tokens_Input = {
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  token?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Scalars['Int']>;
};

export type Update_Upload_File_Input = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['Date']>;
  created_at_func?: InputMaybe<Datetime_FunctionsInput>;
  created_by?: InputMaybe<Scalars['Int']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  formats_func?: InputMaybe<Count_FunctionsInput>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  provider_metadata_func?: InputMaybe<Count_FunctionsInput>;
  size?: InputMaybe<Scalars['Float']>;
  updated_at?: InputMaybe<Scalars['Date']>;
  updated_at_func?: InputMaybe<Datetime_FunctionsInput>;
  updated_by?: InputMaybe<Scalars['Int']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type Update_Upload_File_Morph_Input = {
  field?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  order?: InputMaybe<Scalars['Int']>;
  related_id?: InputMaybe<Scalars['Int']>;
  related_type?: InputMaybe<Scalars['String']>;
  upload_file_id?: InputMaybe<Scalars['Int']>;
};

export type Upload_File = {
  __typename?: 'upload_file';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  created_at_func?: Maybe<Datetime_Functions>;
  created_by?: Maybe<Scalars['Int']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  formats_func?: Maybe<Count_Functions>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  provider_metadata_func?: Maybe<Count_Functions>;
  size: Scalars['Float'];
  updated_at?: Maybe<Scalars['Date']>;
  updated_at_func?: Maybe<Datetime_Functions>;
  updated_by?: Maybe<Scalars['Int']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type Upload_File_Aggregated = {
  __typename?: 'upload_file_aggregated';
  avg?: Maybe<Upload_File_Aggregated_Fields>;
  avgDistinct?: Maybe<Upload_File_Aggregated_Fields>;
  count?: Maybe<Upload_File_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Upload_File_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Upload_File_Aggregated_Fields>;
  min?: Maybe<Upload_File_Aggregated_Fields>;
  sum?: Maybe<Upload_File_Aggregated_Fields>;
  sumDistinct?: Maybe<Upload_File_Aggregated_Fields>;
};

export type Upload_File_Aggregated_Count = {
  __typename?: 'upload_file_aggregated_count';
  alternativeText?: Maybe<Scalars['Int']>;
  caption?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  ext?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['Int']>;
  hash?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mime?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  previewUrl?: Maybe<Scalars['Int']>;
  provider?: Maybe<Scalars['Int']>;
  provider_metadata?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type Upload_File_Aggregated_Fields = {
  __typename?: 'upload_file_aggregated_fields';
  created_by?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type Upload_File_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Upload_File_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Upload_File_Filter>>>;
  alternativeText?: InputMaybe<String_Filter_Operators>;
  caption?: InputMaybe<String_Filter_Operators>;
  created_at?: InputMaybe<Date_Filter_Operators>;
  created_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  created_by?: InputMaybe<Number_Filter_Operators>;
  ext?: InputMaybe<String_Filter_Operators>;
  formats?: InputMaybe<String_Filter_Operators>;
  formats_func?: InputMaybe<Count_Function_Filter_Operators>;
  hash?: InputMaybe<String_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  mime?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  previewUrl?: InputMaybe<String_Filter_Operators>;
  provider?: InputMaybe<String_Filter_Operators>;
  provider_metadata?: InputMaybe<String_Filter_Operators>;
  provider_metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  size?: InputMaybe<Number_Filter_Operators>;
  updated_at?: InputMaybe<Date_Filter_Operators>;
  updated_at_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  updated_by?: InputMaybe<Number_Filter_Operators>;
  url?: InputMaybe<String_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Upload_File_Morph = {
  __typename?: 'upload_file_morph';
  field?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  order?: Maybe<Scalars['Int']>;
  related_id?: Maybe<Scalars['Int']>;
  related_type?: Maybe<Scalars['String']>;
  upload_file_id?: Maybe<Scalars['Int']>;
};

export type Upload_File_Morph_Aggregated = {
  __typename?: 'upload_file_morph_aggregated';
  avg?: Maybe<Upload_File_Morph_Aggregated_Fields>;
  avgDistinct?: Maybe<Upload_File_Morph_Aggregated_Fields>;
  count?: Maybe<Upload_File_Morph_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']>;
  countDistinct?: Maybe<Upload_File_Morph_Aggregated_Fields>;
  group?: Maybe<Scalars['JSON']>;
  max?: Maybe<Upload_File_Morph_Aggregated_Fields>;
  min?: Maybe<Upload_File_Morph_Aggregated_Fields>;
  sum?: Maybe<Upload_File_Morph_Aggregated_Fields>;
  sumDistinct?: Maybe<Upload_File_Morph_Aggregated_Fields>;
};

export type Upload_File_Morph_Aggregated_Count = {
  __typename?: 'upload_file_morph_aggregated_count';
  field?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  related_id?: Maybe<Scalars['Int']>;
  related_type?: Maybe<Scalars['Int']>;
  upload_file_id?: Maybe<Scalars['Int']>;
};

export type Upload_File_Morph_Aggregated_Fields = {
  __typename?: 'upload_file_morph_aggregated_fields';
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  related_id?: Maybe<Scalars['Float']>;
  upload_file_id?: Maybe<Scalars['Float']>;
};

export type Upload_File_Morph_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Upload_File_Morph_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Upload_File_Morph_Filter>>>;
  field?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  order?: InputMaybe<Number_Filter_Operators>;
  related_id?: InputMaybe<Number_Filter_Operators>;
  related_type?: InputMaybe<String_Filter_Operators>;
  upload_file_id?: InputMaybe<Number_Filter_Operators>;
};

export type ArticleQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ArticleQuery = { __typename?: 'Query', articles?: Array<{ __typename?: 'articles', heading?: string | null, sub_heading?: string | null, content?: string | null } | null> | null };

export type ArticleSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type ArticleSlugsQuery = { __typename?: 'Query', articles?: Array<{ __typename?: 'articles', slug?: string | null } | null> | null };


export const ArticleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Article"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"sub_heading"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<ArticleQuery, ArticleQueryVariables>;
export const ArticleSlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ArticleSlugs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<ArticleSlugsQuery, ArticleSlugsQueryVariables>;