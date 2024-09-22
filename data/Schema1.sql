-- Table: public.books

-- DROP TABLE IF EXISTS public.books;

CREATE TABLE IF NOT EXISTS public.books
(
    id integer NOT NULL DEFAULT nextval('books_id_seq'::regclass),
    title character varying(255) COLLATE pg_catalog."default" NOT NULL,
    author character varying(255) COLLATE pg_catalog."default" NOT NULL,
    genre character varying(100) COLLATE pg_catalog."default",
    publication_date date,
    isbn character varying(20) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT books_pkey PRIMARY KEY (id),
    CONSTRAINT books_isbn_key UNIQUE (isbn)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.books
    OWNER to postgres;
