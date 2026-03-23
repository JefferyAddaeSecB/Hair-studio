# Abena Hair Studio - Admin Panel Guide

## 🚀 Quick Start

### Access the Admin Panel
Navigate to: `http://localhost:3000/admin/login`

### Default Credentials
- **Email:** `admin@abenahairstudio.com`
- **Password:** `admin123`

---

## 📋 Features

### 1. **Dashboard**
- View key metrics (Total Messages, Total Bookings, Today's Activity)
- See recent activity from messages and bookings
- Quick stats (Average Response Time, Customer Satisfaction)
- Top services overview

### 2. **Contact Messages**
- View all customer contact form submissions
- Read full message details
- Delete messages
- Reply functionality (ready to integrate)

### 3. **Bookings**
- Manage all customer booking requests
- View complete booking details
- Confirm bookings
- Send appointment reminders
- Delete booking entries

### 4. **Settings**
- Update studio phone number
- Update studio email
- Update studio location
- Update operating hours

---

## 🔧 Integration with Supabase

Currently, the admin panel uses **mock data**. To connect it to your Supabase database:

### Step 1: Update the Contact Messages Page

File: `/app/admin/messages/page.tsx`

Replace the mock data fetch with:

```typescript
import { getSupabaseAdmin } from "@/lib/supabase";

// In the component
useEffect(() => {
  async function fetchMessages() {
    const supabase = getSupabaseAdmin();
    if (!supabase) return;

    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching messages:", error);
    } else {
      setMessages(data || []);
    }
  }

  fetchMessages();
}, []);
```

### Step 2: Update the Bookings Page

File: `/app/admin/bookings/page.tsx`

Replace the mock data fetch with:

```typescript
import { getSupabaseAdmin } from "@/lib/supabase";

// In the component
useEffect(() => {
  async function fetchBookings() {
    const supabase = getSupabaseAdmin();
    if (!supabase) return;

    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching bookings:", error);
    } else {
      setBookings(data || []);
    }
  }

  fetchBookings();
}, []);
```

### Step 3: Update Delete Functions

```typescript
const handleDelete = async (id: string) => {
  const supabase = getSupabaseAdmin();
  if (!supabase) return;

  const { error } = await supabase
    .from("contact_messages") // or "bookings"
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Error deleting:", error);
  } else {
    setMessages(messages.filter((msg) => msg.id !== id));
  }
};
```

---

## 📁 File Structure

```
app/admin/
├── login/page.tsx          # Login page
├── dashboard/page.tsx      # Main dashboard
├── messages/page.tsx       # Contact messages management
├── bookings/page.tsx       # Bookings management
├── settings/page.tsx       # Settings page
└── layout.tsx              # Admin layout wrapper

components/admin/
├── sidebar.tsx             # Navigation sidebar
├── navbar.tsx              # Top navigation bar
├── stats-card.tsx          # Stats display card
├── data-table.tsx          # Generic data table component
└── layout-wrapper.tsx      # Auth wrapper

lib/admin/
├── auth-context.tsx        # Authentication context
└── mock-data.ts            # Mock data for demo
```

---

## 🎨 Design System

### Colors
- **Primary:** Black (#000000)
- **Accent:** Gold (#d4af37)
- **Background:** White
- **Text:** Black (#1d1715)

### Components
- Clean, modern UI with subtle shadows
- Responsive design (mobile-first)
- Smooth transitions and hover effects
- Loading and empty states

---

## 🔐 Authentication

The admin panel uses a simple context-based authentication system with localStorage.

### To Change Credentials

Edit `/lib/admin/auth-context.tsx`:

```typescript
if (email === "new-email@example.com" && password === "new-password") {
  // Login success
}
```

⚠️ **Note:** For production, implement proper authentication with Supabase Auth or another service.

---

## 🚀 Future Enhancements

- [ ] Connect to Supabase database
- [ ] Implement real email replies
- [ ] Add appointment confirmation emails
- [ ] Create customer analytics
- [ ] Add image galleries for portfolio management
- [ ] Implement proper admin authentication
- [ ] Add export to CSV/PDF functionality
- [ ] Create SMS/WhatsApp integration for reminders

---

## 📝 License

Part of Abena Hair Studio website - Internal Use Only

