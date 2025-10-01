import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { insertBookingSchema } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { Itinerary } from "@shared/schema";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DateRange } from "react-day-picker";
import React from 'react';

export default function Book() {
  const { toast } = useToast();

  // Fixed safari categories instead of fetching from database
  const safariCategories = [
    { id: 1, title: "Luxury Safari" },
    { id: 2, title: "Budget Safari" },
    { id: 3, title: "Wildlife & Conservation Safari" },
    { id: 4, title: "Culture Safari" }
  ];

  const form = useForm({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      countryCode: "+254",
      itineraryId: 0,
      preferredDates: "",
      numberOfAdults: 1,
      numberOfKids: 0,
      numberOfToddlers: 0,
      message: ""
    }
  });

  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  const mutation = useMutation({
    mutationFn: (data: any) => 
      apiRequest("POST", "/api/bookings", {
        ...data,
        preferredDates: dateRange ? 
          `${format(dateRange.from!, 'PP')} - ${format(dateRange.to!, 'PP')}` :
          ""
      }),
    onSuccess: () => {
      toast({
        title: "Booking Submitted",
        description: "We'll contact you via email or phone to confirm your booking!"
      });
      form.reset();
      setDateRange(undefined);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit booking",
        variant: "destructive"
      });
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Book Your <span className="text-brand-orange">Adventure</span></h1>

      <div className="max-w-xl mx-auto mb-8">
        <div className="bg-slate-50 rounded-lg p-4 text-sm mb-8">
          <p className="mb-2">For immediate assistance or to discuss your safari in detail, please contact us:</p>
          <ul className="space-y-1">
            <li><strong>Phone:</strong> +254 723 619669</li>
            <li><strong>Email:</strong> reservations@snowytopsafari.com or sales@snowytopsafari.com</li>
          </ul>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Phone Number with Country Code */}
            <div className="grid grid-cols-4 gap-2">
              <FormField
                control={form.control}
                name="countryCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="+254">🇰🇪 +254</SelectItem>
                        <SelectItem value="+255">🇹🇿 +255</SelectItem>
                        <SelectItem value="+256">🇺🇬 +256</SelectItem>
                        <SelectItem value="+1">🇺🇸 +1</SelectItem>
                        <SelectItem value="+44">🇬🇧 +44</SelectItem>
                        <SelectItem value="+49">🇩🇪 +49</SelectItem>
                        <SelectItem value="+33">🇫🇷 +33</SelectItem>
                        <SelectItem value="+39">🇮🇹 +39</SelectItem>
                        <SelectItem value="+34">🇪🇸 +34</SelectItem>
                        <SelectItem value="+31">🇳🇱 +31</SelectItem>
                        <SelectItem value="+41">🇨🇭 +41</SelectItem>
                        <SelectItem value="+46">🇸🇪 +46</SelectItem>
                        <SelectItem value="+47">🇳🇴 +47</SelectItem>
                        <SelectItem value="+45">🇩🇰 +45</SelectItem>
                        <SelectItem value="+358">🇫🇮 +358</SelectItem>
                        <SelectItem value="+43">🇦🇹 +43</SelectItem>
                        <SelectItem value="+32">🇧🇪 +32</SelectItem>
                        <SelectItem value="+351">🇵🇹 +351</SelectItem>
                        <SelectItem value="+91">🇮🇳 +91</SelectItem>
                        <SelectItem value="+86">🇨🇳 +86</SelectItem>
                        <SelectItem value="+81">🇯🇵 +81</SelectItem>
                        <SelectItem value="+82">🇰🇷 +82</SelectItem>
                        <SelectItem value="+61">🇦🇺 +61</SelectItem>
                        <SelectItem value="+64">🇳🇿 +64</SelectItem>
                        <SelectItem value="+27">🇿🇦 +27</SelectItem>
                        <SelectItem value="+971">🇦🇪 +971</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <div className="col-span-3">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="712345678" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <FormField
              control={form.control}
              name="itineraryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Safari Category</FormLabel>
                  <Select onValueChange={(value) => field.onChange(parseInt(value))}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your safari type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {safariCategories.map((category) => (
                        <SelectItem key={category.id} value={category.id.toString()}>
                          {category.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            {/* Demographic Information */}
            <div className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="numberOfAdults"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adults</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        min="1" 
                        max="20"
                        placeholder="1"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                        value={field.value || 1}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="numberOfKids"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kids (3-12)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        min="0" 
                        max="20"
                        placeholder="0"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                        value={field.value || 0}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="numberOfToddlers"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Toddlers (0-2)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        min="0" 
                        max="10"
                        placeholder="0"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                        value={field.value || 0}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormItem>
              <FormLabel>Preferred Dates</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !dateRange && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange?.from ? (
                      dateRange.to ? (
                        <>
                          {format(dateRange.from, "LLL dd, y")} -{" "}
                          {format(dateRange.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(dateRange.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick your dates</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={dateRange?.from}
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </FormItem>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Notes</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={mutation.isPending}>
              Submit Booking Request
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}