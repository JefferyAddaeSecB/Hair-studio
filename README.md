# Abena Hair Studio

A responsive ladies salon website built with Next.js, React, Tailwind CSS, TypeScript, and Supabase-ready API routes.

## Setup

1. Install dependencies with `npm install`
2. Copy `.env.example` to `.env.local`
3. Add your Supabase project URL and service role key
4. Run `npm run dev`

## Suggested Supabase Tables

### `bookings`

- `id` uuid primary key default `gen_random_uuid()`
- `created_at` timestamptz default `now()`
- `full_name` text
- `email` text
- `phone` text
- `service` text
- `preferred_date` date
- `notes` text nullable

### `messages`

- `id` uuid primary key default `gen_random_uuid()`
- `created_at` timestamptz default `now()`
- `name` text
- `email` text
- `message` text
